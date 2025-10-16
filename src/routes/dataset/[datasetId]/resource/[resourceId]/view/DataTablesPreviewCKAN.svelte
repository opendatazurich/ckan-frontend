<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import DataTable from 'datatables.net-dt';
    import type { Api } from 'datatables.net'
    import 'datatables.net-dt/css/dataTables.dataTables.css';

    export let ckanUrl: string;
    export let resourceId: string;
    export let pageLength = 25;
    export let initialFilters: Record<string, string | number | boolean> = {};

    type CKANRecord = Record<string, unknown>;
    type DTOrder = { column: number; dir: 'asc' | 'desc' };
    type DTColReq = { data: string; search: { value: string } };
    type DTParams = {
        start: number;
        length: number;
        order: DTOrder[];
        search: { value: string };
        columns: DTColReq[];
    };
    type DTFunctionAjax = (
        request: unknown,
        callback: (data: { data: unknown[]; recordsTotal: number; recordsFiltered: number }) => void,
        settings: unknown
    ) => void;
    type DTResponse = {
        data: CKANRecord[];
        recordsTotal: number;
        recordsFiltered: number;
    };

    let tableEl: HTMLTableElement;
    let dt: Api<CKANRecord> | null = null; // it is possible this is not yet created


    /** Translate DataTables request -> CKAN Datastore params */
    function buildCKANParams(dtParams: DTParams, columns: Array<{ data: string }>) {
        const { start = 0, length = pageLength, order = [], search = {}, columns: dtCols = [] } = dtParams;

        const params: Record<string, unknown> = {
            resource_id: resourceId,
            limit: length,
            offset: start
        };

        // Global search -> CKAN 'q' (basic contains/fulltext)
        if (search?.value) params.q = search.value;

        // Column searches -> CKAN 'filters' (exact/contains depending on backend config)
        const colFilters: Record<string, string | number | boolean> = { ...initialFilters };
        dtCols.forEach((c, idx) => {
            const value = c?.search?.value;
            if (value) {
                const fieldId = columns[idx].data;
                colFilters[fieldId] = value;
            }
        });
        if (Object.keys(colFilters).length) params.filters = JSON.stringify(colFilters);

        // Sorting
        if (order?.length) {
            const first = order[0];
            const colId = columns[first.column]?.data;
            if (colId) {
                const dir = first.dir === 'desc' ? 'desc' : 'asc';
                params.sort = `${colId} ${dir}`;
            }
        }
        return params;
    }

    /** AJAX adapter for DataTables -> CKAN */
    async function fetchPage(dtParams: DTParams, colKeys: Array<{ data: string }>): Promise<DTResponse> {
        if (!resourceId) return { data: [], recordsTotal: 0, recordsFiltered: 0 };

        const params = buildCKANParams(dtParams, colKeys);
        const q = new URLSearchParams();
        for (const [k, v] of Object.entries(params)) q.set(k, String(v));
        const url = `${ckanUrl}/api/action/datastore_search?${q.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`CKAN fetch failed: ${res.status}`);
        const json = await res.json();
        if (!json.success) throw new Error('CKAN returned success=false');
        const { records = [], total = 0 } = json.result;
        return { data: records, recordsTotal: total, recordsFiltered: total };

    }

    async function initTable() {
        // Fetch one small page of data to infer columns
        const preview = await fetchPage(
            { start: 0, length: 10, order: [], search: { value: '' }, columns: [] },
            []
        );

        if (!preview.data?.length) {
            console.warn('No data returned from CKAN to build columns');
            return;
        }

        // Infer column keys from the first record
        const sample = preview.data[0];
        const keys = Object.keys(sample);

        // Build columns
        const columns = keys.map((k) => ({
            data: (row: Record<string, unknown>) => (row as CKANRecord)[k],
            title: k,
            render: (val: unknown) => (val == null ? '' : String(val))
        }));

        // For CKAN sorting/filtering
        const colKeys = keys.map((k) => ({ data: k }));

        dt?.destroy();
        dt = new DataTable<CKANRecord>(tableEl, {
            serverSide: true,
            processing: true,
            searching: true,
            ordering: true,
            scrollY: 600,
            pageLength,
            columns,
            initComplete: () => {
                if (!dt) return;

                const indexes = dt.columns().indexes().toArray();
                indexes.forEach((idx) => {
                    const col = dt!.column(idx);
                    const header = col.header() as HTMLTableCellElement;

                    const input = document.createElement('input');
                    input.type = 'search';
                    input.placeholder = 'Filter…';
                    input.style.width = '100%';
                    input.addEventListener('input', () => col.search(input.value).draw());

                    const wrap = document.createElement('div');
                    wrap.appendChild(input);
                    header.appendChild(wrap);
                });
            },
            ajax: ajaxAdapter(fetchPage, colKeys)
        });
    }

    function ajaxAdapter(
        loader: (p: DTParams, cols: Array<{ data: string }>) => Promise<DTResponse>,
        colKeys: Array<{ data: string }>
    ): DTFunctionAjax {
        return (req, callback) => {
            loader(req as DTParams, colKeys)
                .then((r) => {
                    callback({
                        data: r.data,
                        recordsTotal: r.recordsTotal,
                        recordsFiltered: r.recordsFiltered
                    });
                })
                .catch((err) => {
                    console.error('CKAN/DataTables load error:', err);
                    callback({ data: [], recordsTotal: 0, recordsFiltered: 0 });
                });
        };
    }

    onMount(() => { initTable(); });
    onDestroy(() => { dt?.destroy(); });
</script>

<table bind:this={tableEl} class="display w-full"></table>

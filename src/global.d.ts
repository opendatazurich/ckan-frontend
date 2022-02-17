/// <reference types="@sveltejs/kit" />
interface ImportMetaEnv {
	readonly VITE_CKAN_URL: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}

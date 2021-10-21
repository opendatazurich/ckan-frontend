export const url = (path: string) => `https://data.stadt-zuerich.ch/api/3/action/${path}`;
export const get = async (path: string) => {
	const res = await fetch(url(path));
	if (res.ok) {
		const data = await res.json();
		return data.result;
	}
	throw new Error(res.statusText);
};

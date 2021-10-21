import rm from 'remove-markdown';

export function truncate(str: string, length = 180, ellipsis = '...', retrim = true) {
	if (str.length <= length) {
		return str;
	}
	let trimmedString = str.substr(0, length);

	if (retrim) {
		trimmedString = trimmedString.substr(
			0,
			Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
		);
	}

	return trimmedString + ellipsis;
}

export function removeMarkdown(str: string) {
	return rm(str).replaceAll('&quot;', '"');
}

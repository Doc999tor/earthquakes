export function serializeQueryString(body: { [key: string]: any }) {
	return Object.entries(body)
		.map(kv => encodeURIComponent(kv[0]) + '=' + encodeURIComponent(kv[1].toString()))
		.join('&')
}

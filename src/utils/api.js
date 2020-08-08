import axios from 'axios';

const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

export default async function Api({ url, data = null, method = 'GET' }) {
	const result = await axios({ url, data, method, headers }).then((res) => res.data);
	return result;
}

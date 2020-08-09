export const filtartionItem = (data) => {
	const arr = [];
	data.forEach(({ title, images: { default: { filePath } }, description, id }) => {
		arr.push({ title, filePath, description, id });
	});
	return arr;
};

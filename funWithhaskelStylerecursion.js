let recursiveDouble = (list) => {
	if(!list || !list.length) return [];
	const [head, ...rest] = list;
	return [head * 2, ...recursiveDouble(rest)];
}

import axios from "axios";

const api = axios.create({
	baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const fetchItems = (category) => {
	let pathStr = "/items";
	if (category) pathStr += `?category_name=${category}`;
	return api.get(pathStr).then(({ data: { items } }) => {
		return items;
	});
};

export const fetchCategories = () => {
	return api.get("/categories").then(({ data: { categories } }) => {
		return categories;
	});
};

export const postItem = (item) => {
	return api.post("/items", item).then((res) => {
		console.log(res);
	});
};

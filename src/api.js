import axios from "axios";

const fetchApi = axios.create({
	baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const fetchItems = (category) => {
	let pathStr = "/items";
	if (category) pathStr += `?category_name=${category}`;
	return fetchApi.get(pathStr).then(({ data: { items } }) => {
		return items;
	});
};

export const fetchCategories = () => {
	return fetchApi.get("/categories").then(({ data: { categories } }) => {
		return categories;
	});
};

import axios from "axios";

const fetchApi = axios.create({
	baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const fetchItems = () => {
	return fetchApi.get("/items").then(({ data: { items } }) => {
		return items;
	});
};

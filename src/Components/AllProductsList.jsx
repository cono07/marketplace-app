import { fetchItems } from "../api";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProductsList = (currentSelectedCat) => {
	const [itemsList, setItemsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchItems().then((items) => {
			setItemsList(items);
			setIsLoading(false);
		});
	}, []);

	console.log("Here", itemsList);
	//declare original list state - list to show
	//state current nav item selected

	// create/set state of list - all products to start with
	//useEffect - fetch function passes the current selecte cat - to use as a filter/query
	//set the current list, [currentselectcat]

	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h1>All Products</h1>
					<section className="Product__Grid">
						{itemsList.map((item) => {
							return <ProductCard key={item.item_id} item={item} />;
						})}
					</section>
				</>
			)}
		</>
	);
};

export default AllProductsList;

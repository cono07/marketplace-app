import { fetchItems } from "../api";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const AllProductsList = () => {
	const [itemsList, setItemsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { category } = useParams();

	useEffect(() => {
		fetchItems(category).then((items) => {
			setItemsList(items);
			setIsLoading(false);
		});
	}, [category]);

	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h1>{category ? category : "All Items"}</h1>
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

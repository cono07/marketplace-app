import { useEffect, useState } from "react";
import { fetchCategories, postItem } from "../api";

const SellItems = () => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [itemToSell, setItemToSell] = useState({
		item_name: "",
		img_url: "",
		price: 0,
		description: "",
		category_name: "",
	});
	const [finalItemObject, setFinalItemObject] = useState({});

	const dropList = [" "];
	const handleSubmit = (event) => {
		event.preventDefault();
		setFinalItemObject(itemToSell);
		postItem(finalItemObject);
	};

	useEffect(() => {
		fetchCategories().then((categories) => {
			categories.map((category) => {
				return dropList.push(category.category_name);
			});
			setCategories(dropList);
		});
	}, [categories]);

	return (
		<>
			<h1>Sell An Item</h1>
			<form>
				<div>
					<label>Item Name</label>
					<input
						name="item_name"
						id="item_name"
						type="text"
						placeholder="E.g. 
          Earmuffs"
						required
						value={itemToSell.item_name}
						onChange={(event) => {
							setItemToSell({
								...itemToSell,
								item_name: event.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label>Choose Item Image</label>
					<input
						name="item_image"
						id="item_image"
						type="text"
						required
						value={itemToSell.img_url}
						onChange={(event) => {
							setItemToSell({
								...itemToSell,
								img_url: event.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label>Item Price</label>
					<input
						name="item_price"
						id="item_price"
						type="number"
						required
						value={itemToSell.price}
						onChange={(event) => {
							setItemToSell({
								...itemToSell,
								price: event.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label>Item Description</label>
					<textarea
						name="description"
						id="description"
						value={itemToSell.description}
						onChange={(event) => {
							setItemToSell({
								...itemToSell,
								description: event.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label>Select Category</label>
					<select
						name="category"
						id="category"
						value={selectedCategory}
						onChange={(event) => {
							setSelectedCategory(event.target.value);
							setItemToSell({
								...itemToSell,
								category_name: event.target.value,
							});
						}}
					>
						{categories.map((category) => {
							return (
								<option key={category} value={category}>
									{category}
								</option>
							);
						})}
					</select>
				</div>
				<button type="submit" onClick={handleSubmit}>
					Sell Item
				</button>
			</form>
		</>
	);
};

export default SellItems;

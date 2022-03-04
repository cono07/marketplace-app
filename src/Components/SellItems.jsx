import { useEffect, useState } from "react";
import { fetchCategories } from "../api";
import { useParams } from "react-router-dom";

const SellItems = () => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");

	const dropList = [" "];
	// const { item_name } = useParams();
	// console.log(item_name);

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
					/>
				</div>
				<div>
					<label>Choose Item Image</label>
					<input name="item_image" id="item_image" type="file" />
				</div>
				<div>
					<label>Item Price</label>
					<input name="item_price" id="item_price" type="number" required />
				</div>
				<div>
					<label>Item Description</label>
					<textarea name="item_description" id="item_description" />
				</div>
				<div>
					<label>Select Category</label>
					<select
						name="category"
						id="category"
						value={selectedCategory}
						onChange={(event) => {
							setSelectedCategory(event.target.value);
							console.log("event", event.target.value);
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
				<button type="submit">Sell Item</button>
			</form>
		</>
	);
};

export default SellItems;

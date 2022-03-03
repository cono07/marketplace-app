const ProductCard = ({ item }) => {
	let formatPrice = (Number(item.price) / 100).toFixed(2);
	return (
		<article className="ProductCard__article">
			<img
				src={item.img_url}
				alt="Product Item"
				className="ProductCard__article__image"
			></img>
			<h2>{item.item_name}</h2>
			<h3>Category: {item.category_name}</h3>
			<h2>£{formatPrice}</h2>
			<p>{item.description}</p>
		</article>
	);
};

export default ProductCard;

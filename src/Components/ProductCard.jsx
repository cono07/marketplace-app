import { useState } from "react";

const ProductCard = ({ item }, setBasketList) => {
  const [currentBasketItem, setCurrentBasketItem] = useState({});

  const addToBasket = () => {
    setCurrentBasketItem(item);
    //Trying to add the product to the main basket which is set in state in app.js - not working
    // setBasketList((currList) => {
    //   return [...currList, currentBasketItem];
    // });
  };

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
      <button onClick={addToBasket}>Add to basket</button>
    </article>
  );
};

export default ProductCard;

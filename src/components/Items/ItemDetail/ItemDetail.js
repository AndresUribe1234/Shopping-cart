import ItemForm from "./ItemForm";
import classes from "./ItemDetail.module.css";

import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const ItemDetail = function (props) {
  const cartCtx = useContext(CartContext);

  const price = "$" + props.price.toFixed(2);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ItemDetail;

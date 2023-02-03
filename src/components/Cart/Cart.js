import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = function (props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = "$" + cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((ele) => (
        <CartItem
          key={ele.id}
          name={ele.name}
          amount={ele.amount}
          price={ele.price}
          onRemove={cartItemRemoveHandler.bind(null, ele.id)}
          onAdd={cartItemAddHandler.bind(null, ele)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

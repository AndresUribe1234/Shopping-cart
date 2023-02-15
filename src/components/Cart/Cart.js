import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = function (props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = "$" + cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;
  const [checkoutRender, setCheckoutRender] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(null);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const orderHandler = () => {
    setCheckoutRender(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      console.log(userData);
      await fetch(
        "https://meals-backend-react-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: userData, orderItems: cartCtx.items }),
        }
      );
      setDidSubmit(true);
      setIsSubmitting(false);
      cartCtx.clearCart();
    } catch (err) {
      console.log(err);
      setDidSubmit(false);
    }
  };

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutRender && (
        <Checkout
          onCancel={props.onCloseCart}
          onSubmitOrder={submitOrderHandler}
        />
      )}
      {!checkoutRender && modalActions}
    </React.Fragment>
  );

  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;

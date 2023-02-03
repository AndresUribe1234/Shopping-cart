import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const [btnAddClasses, setBtnAddClasses] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (currentNumber, ele) => currentNumber + ele.amount,
    0
  );

  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnAddClasses ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAddClasses(true);

    const timer = setTimeout(() => {
      setBtnAddClasses(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;

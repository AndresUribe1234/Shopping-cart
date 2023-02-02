import Input from "../../UI/Input";
import classes from "./ItemForm.module.css";
import { useRef, useState } from "react";

function ItemForm(props) {
  const [amountValid, setAmountValid] = useState(true);
  const inputValueRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputValueRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNum < 1 ||
      enteredAmount > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputValueRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default ItemForm;

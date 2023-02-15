import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isValidPostal = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formValid, setformValid] = useState({
    name: true,
    adress: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const adressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const nameEntered = nameInputRef.current.value;
    const adressEntered = adressInputRef.current.value;
    const postalCodeEntered = postalInputRef.current.value;
    const cityEntered = cityInputRef.current.value;

    const validName = isEmpty(nameEntered);
    const validAdress = isEmpty(adressEntered);
    const validCity = isEmpty(cityEntered);
    const validPostalCode = isValidPostal(postalCodeEntered);

    const isInputsValid =
      !validName && !validAdress && !validCity && validPostalCode;

    setformValid({
      name: nameEntered,
      adress: adressEntered,
      postalCode: postalCodeEntered,
      city: cityEntered,
    });

    if (!isInputsValid) {
      return;
    }

    props.onSubmitOrder({
      name: nameEntered,
      adress: adressEntered,
      postalCode: postalCodeEntered,
      city: cityEntered,
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Adress</label>
        <input type="text" id="street" ref={adressInputRef} />
        {!formValid.adress && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {(!formValid.postalCode || formValid.postalCode.length !== 5) && (
          <p>Please enter a valid name!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValid.city && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.actions}>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Checkout;

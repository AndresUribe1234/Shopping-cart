import React from "react";
import mealsImage from "./../../assets/mealsImage.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table with food" />
      </div>
    </React.Fragment>
  );
}

export default Header;

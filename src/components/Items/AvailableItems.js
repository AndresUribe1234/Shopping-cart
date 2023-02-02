import React from "react";
import classes from "./AvailableItems.module.css";
import Card from "../UI/Card";
import ItemDetail from "./ItemDetail/ItemDetail";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableItems = () => {
  const itemsList = DUMMY_MEALS.map((ele) => (
    <ItemDetail
      name={ele.name}
      description={ele.description}
      price={ele.price}
      key={ele.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{itemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
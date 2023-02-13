import React, { useEffect, useState } from "react";
import classes from "./AvailableItems.module.css";
import Card from "../UI/Card";
import ItemDetail from "./ItemDetail/ItemDetail";

const AvailableItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const response = await fetch(
        "https://meals-backend-react-default-rtdb.firebaseio.com/food.json"
      );
      const data = await response.json();

      const loadedItems = [];

      Object.keys(data).forEach((key) => {
        if (data[key].length > 1) {
          data[key].forEach((ele) => loadedItems.push(ele));
        } else {
          loadedItems.push(data[key]);
        }
      });

      setItems(loadedItems);

      console.log(loadedItems);
    };

    loadItems();
  }, []);

  const itemsList = items.map((ele) => (
    <ItemDetail
      name={ele.name}
      description={ele.description}
      price={ele.price}
      key={ele.id}
      id={ele.id}
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

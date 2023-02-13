import fetch from "node-fetch";

const dishes = [
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

const createDishData = async () => {
  try {
    const postReq = await fetch(
      "https://meals-backend-react-default-rtdb.firebaseio.com/food.json",
      {
        method: "POST",
        body: JSON.stringify(dishes),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("success");
  } catch (err) {
    console.log(err);
  }
};

createDishData();

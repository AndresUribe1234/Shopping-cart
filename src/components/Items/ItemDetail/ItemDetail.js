import ItemForm from "./ItemForm";
import classes from "./ItemDetail.module.css";

const ItemDetail = function (props) {
  const price = "$" + props.price.toFixed(2);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm></ItemForm>
      </div>
    </li>
  );
};

export default ItemDetail;

import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
    console.log(items);
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(title, price)}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

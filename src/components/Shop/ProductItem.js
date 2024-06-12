import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cartSlice";
import { useCallback } from "react";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { title, price, description } = props;

  const addToCartHandler = useCallback(
    (title, price) => {
      const existingItem = items.find((item) => item.title === title);

      if (existingItem) {
        dispatch(cartAction.addQuantity(title));
      } else {
        dispatch(cartAction.addToCart({ title, quantity: 1, price }));
      }
      console.log(items);
    },
    [dispatch, items]
  );

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

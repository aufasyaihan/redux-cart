import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, price, id } = props.item;
  const total = price * quantity;

  const decreaseHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };
  const addQuantity = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => decreaseHandler(title)}>-</button>
          <button onClick={() => addQuantity(title)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

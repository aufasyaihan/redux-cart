import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../../store";

const CartButton = (props) => {
  const itemQuantity = useSelector((state) => state.item.quantity);

  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(cartAction.showCart);
  };
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;

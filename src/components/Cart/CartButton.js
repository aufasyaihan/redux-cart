import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const handleShowCart = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{items[0].quantity || "0"}</span>
    </button>
  );
};

export default CartButton;

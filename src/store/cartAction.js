import { cartAction } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-2d778-default-rtdb.firebaseio.com/cart.json"
      );

      const data = await response.json();

      if (!response) {
        throw new Error("Could not fetch cart data!");
      }
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An Error Occured!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-2d778-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An Error Occured!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

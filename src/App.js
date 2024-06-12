import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { uiActions } from "./store/uiSlice";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));

    const hideNotification = setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 3000);

    return () => clearTimeout(hideNotification);
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

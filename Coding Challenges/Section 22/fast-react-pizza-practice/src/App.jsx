import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as actionCreateOrder,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { element: <Home />, path: "/" },
      {
        element: <Menu />,
        path: "/menu",
        loader: loaderMenu,
      },
      {
        element: <Cart />,
        path: "/cart",
      },
      {
        element: <CreateOrder />,
        path: "/order/new",
        errorElement: <Error />,
        action: actionCreateOrder,
      },
      {
        element: <Order />,
        path: "/order/:orderID",
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/Order";
import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
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
        loader: menuLoader,
        errorElement: <Error />,
      },
      { element: <Cart />, path: "/Cart" },
      { element: <CreateOrder />, path: "/oreder/new" },
      {
        path: "/order/:orderID",
        element: <Order />,
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

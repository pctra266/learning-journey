import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './screens/Home';
import PageNotFound from './screens/PageNotFound';
import Layout from './screens/Layout';
import Checkout from './screens/Checkout';
import Products from './screens/Products';
import Reviews from './screens/Reviews';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "reviews", element: <Reviews /> },
      { path: "checkout", element: <Checkout /> },
      { path: "*", element: <PageNotFound /> }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};

export default App;

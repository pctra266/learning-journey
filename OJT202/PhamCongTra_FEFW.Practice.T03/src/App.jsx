import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./screens/PageNotFound";
import Layout from "./screens/Layout";
import Product from "./screens/Product";
import ProductDetail from "./screens/ProductDetail";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Product /> },
      { path: "products", element: <Product /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
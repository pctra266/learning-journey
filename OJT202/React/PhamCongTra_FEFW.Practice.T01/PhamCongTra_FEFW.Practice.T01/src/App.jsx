import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customer from "./screens/Customer";
import PageNotFound from "./screens/PageNotFound";
import Layout from "./screens/Layout";
import CustomerInfoPage from "./screens/CustomerInfoPage";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "customers", element: <Customer /> },
      { path: "/customers/:id", element: <CustomerInfoPage /> },
      { path: "/", element: <Customer /> },
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

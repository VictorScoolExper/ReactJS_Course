import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// alternative way to implement react_router
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);
// end of alternative method


const router = createBrowserRouter([
  // try to create many routes with there wrapper
  {
    // absolute paths start with "/" and relative path are the alternatives
    // relative paths get added after whatever is in the url
    // absolute paths are added after the domain
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "", element: <HomePage /> },
      // alternative method to the one above
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      // Dynamic Route Path example
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
  // Here we can add different roots or route dependent wrappers
  // {
  //   path: '/admin',
  //   children: [

  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

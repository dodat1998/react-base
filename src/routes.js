import React from "react";

import Home from "./pages/HomePage/Home";
import NotFound from "./pages/NotFoundPage/NotFound";
import ProductAction from "./pages/ProductActionPage/ProductAction";
import ProductList from "./pages/ProductsListPage/ProductList";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductList />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductAction history={history} />,
  },
  {
    path: "/product/edit/:id",
    exact: false,
    main: ({ match, history }) => (
      <ProductAction match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;

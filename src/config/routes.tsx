import { RouteObject, useRoutes } from "react-router";
import { Home } from "../pages";
import { SharedLayout } from "../components/layout/SharedLayout";
import ScrollToTop from "../components/ScrollToTop";

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <>
          <SharedLayout />
          <ScrollToTop />
        </>
      ),
      children: [{ index: true, element: <Home /> }],
    },
  ];
  return useRoutes(routes);
}

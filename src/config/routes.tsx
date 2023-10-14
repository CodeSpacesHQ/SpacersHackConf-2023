import { RouteObject, useRoutes } from "react-router";
import { SharedLayout } from "../components/layout/SharedLayout";
import ScrollToTop from "../components/ScrollToTop";

import { Home, Speakers, Schedule } from "../pages";

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
      children: [
        { index: true, element: <Home /> },
        { path: "/speakers", element: <Speakers /> },
        { path: "/schedule", element: <Schedule /> },
      ],
    },
  ];
  return useRoutes(routes);
}

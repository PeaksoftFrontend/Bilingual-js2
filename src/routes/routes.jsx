import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutPage } from "../layout/LayoutPage";
import { PrivateRouter } from "./PrivateRouter";
import { AdminPage } from "../layout/AdminPage";
import { UserLayout } from "../layout/UserLayout";
import { ResultPage } from "../pages/client/ResultPage";
import { TestPage } from "../pages/client/TestPage";
import { CreateTest } from "../pages/admin/createTest/CreateTest";
import { SubmittedResults } from "../pages/admin/submitted Results/SubmittedResults";
import { NotFoundPage } from "../pages/404/NotFoundPage";

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRouter
          Component={<LayoutPage />}
          allowedRoles={["GUEST", "USER"]}
          fallbackPath={"/user"}
        />
      ),
    },
    {
      path: "/admin",
      element: (
        <PrivateRouter
          Component={<AdminPage />}
          allowedRoles={["ADMIN"]}
          fallbackPath={"/"}
        />
      ),
      children: [
        {
          path: "submittedResults",
          element: <SubmittedResults />,
        },
        {
          path: "createTest",
          element: <CreateTest />,
        },
        {
          path: "/admin",
          element: <CreateTest />,
        },
      ],
    },
    {
      path: "/main",
      element: (
        <PrivateRouter
          Component={<UserLayout />}
          allowedRoles={["USER"]}
          fallbackPath={"/"}
        />
      ),
      children: [
        {
          path: "result",
          element: <ResultPage />,
        },
        {
          path: "test",
          element: <TestPage />,
        },
        {
          path: "/main",
          element: <TestPage />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

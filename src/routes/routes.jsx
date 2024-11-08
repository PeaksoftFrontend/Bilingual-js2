import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LayoutPage } from "../layout/LayoutPage";
import { PrivateRouter } from "./PrivateRouter";
import { AdminPage } from "../layout/AdminPage";
import { UserLayout } from "../layout/UserLayout";
import { ResultPage } from "../pages/client/ResultPage";
import { UserTestPage } from "../pages/client/UserTestPage";
import { CreateTest } from "../pages/admin/createTest/CreateTest";
import { SubmittedResults } from "../pages/admin/submitted Results/SubmittedResults";
import { NotFoundPage } from "../pages/404/NotFoundPage";
import { TestPage } from "../pages/admin/createTest/admin-test/TestPage";
import { AddNewTest } from "../pages/admin/createTest/admin-test/AddNewTest";
import { TestInfo } from "../pages/admin/createTest/admin-test/TestInfo";

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
          index: true,
          element: <Navigate to="testPage" />,
        },
        {
          path: "testPage",
          element: <TestPage />,
        },
        {
          path: "testInfo/:testInfoId",
          element: <TestInfo />,
        },
        {
          path: "createTest",
          element: <CreateTest />,
        },
        {
          path: "submittedResults",
          element: <SubmittedResults />,
        },
        {
          path: "addNewTest",
          element: <AddNewTest />,
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
          index: true,
          element: <Navigate to="test" />,
        },
        {
          path: "result",
          element: <ResultPage />,
        },
        {
          path: "test",
          element: <UserTestPage />,
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

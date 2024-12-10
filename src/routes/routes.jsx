import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LayoutPage } from "../layout/LayoutPage";
import { PrivateRouter } from "./PrivateRouter";
import { AdminPage } from "../layout/AdminPage";
import { UserLayout } from "../layout/UserLayout";
import { CreateTest } from "../pages/admin/createTest/CreateTest";
import { SubmittedResults } from "../pages/admin/submitted Results/SubmittedResults";
import { NotFoundPage } from "../pages/404/NotFoundPage";
import { TestPage } from "../pages/admin/createTest/admin-test/TestPage";
import { AddNewTest } from "../pages/admin/createTest/admin-test/AddNewTest";
import { TestInfo } from "../pages/admin/createTest/admin-test/TestInfo";
import { Highlight } from "../pages/client/user-test/Highlight";
import { CompletePractice } from "../pages/client/test/CompletePractice";
import { ResultPage } from "../pages/client/user-test/ResultPage";
import { UserTestPage } from "../pages/client/user-test/UserTestPage";
import { StartTest } from "../pages/client/user-test/StartTest";
import { CollectUserTest } from "../pages/client/user-test/CollectUserTest";
import { TypeHearTest } from "../pages/client/takeTheTest/TypeHearTest";

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRouter
          Component={<LayoutPage />}
          allowedRoles={["GUEST", "USER"]}
        />
      ),
    },
    {
      path: "/admin",
      element: (
        <PrivateRouter Component={<AdminPage />} allowedRoles={["ADMIN"]} />
      ),
      children: [
        {
          index: true,
          element: <Navigate to="test-page" />,
        },
        {
          path: "test-page",
          element: <TestPage />,
        },
        {
          path: "test-page/test-info/:testInfoId",
          element: <TestInfo />,
        },
        {
          path: "test-page/create-test",
          element: <CreateTest />,
        },
        {
          path: "submitted-results",
          element: <SubmittedResults />,
        },
        {
          path: "test-page/add-new-test",
          element: <AddNewTest />,
        },
      ],
    },
    {
      path: "/main",
      element: (
        <PrivateRouter Component={<UserLayout />} allowedRoles={["USER"]} />
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
        {
          path: "test/start-test",
          element: <StartTest />,
        },
        {
          path: "complete",
          element: <CompletePractice />,
        },
        {
          path: "TypeYouHear",
          element: <TypeHearTest />,
        },
        {
          path: "highlight",
          element: <Highlight />,
        },
        {
          path: "test/start-test/user-test/:userTestId",
          element: <CollectUserTest />,
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

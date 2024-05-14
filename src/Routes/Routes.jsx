import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import PrivateRoutes from "./PrivateRoutes";
import ViewAssignment from "../Pages/Assignments/ViewAssignment";
import MySubmittedAssignments from "../Pages/Assignments/MySubmittedAssignments/MySubmittedAssignments";
import PendingAssignments from "../Pages/PendingAssignments/PendingAssignments";
import AssignmentBased from "../Pages/PendingAssignments/AssignmentBased";
import UpdateAssignments from "../Pages/Assignments/UpdateAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/create-assignments",
        element: (
          <PrivateRoutes>
            <CreateAssignments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments />,
        loader: () =>
          fetch("https://study-buddy-server-mu.vercel.app/allAssignments", {
            credentials: "include",
          }),
      },
      {
        path: "/update-assignments/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssignments />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-buddy-server-mu.vercel.app/view-assignment/${params.id}`
          ),
      },
      {
        path: "/view-assignment/:id",
        element: (
          <PrivateRoutes>
            <ViewAssignment />
          </PrivateRoutes>
        ),

        loader: ({ params }) =>
          fetch(
            `https://study-buddy-server-mu.vercel.app/view-assignment/${params.id}`
          ),
      },
      {
        path: "/my-submitted-assignments",
        element: (
          <PrivateRoutes>
            <MySubmittedAssignments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/pending-assignments",
        element: (
          <PrivateRoutes>
            <PendingAssignments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/pending-assignments/assignment-based/:id",
        element: <AssignmentBased />,
        loader: ({ params }) =>
          fetch(
            `https://study-buddy-server-mu.vercel.app/pending-assignments/assignment-based/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

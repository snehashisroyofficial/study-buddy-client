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
        loader: () => fetch("http://localhost:5000/allAssignments"),
      },
      {
        path: "/view-assignment/:id",
        element: <ViewAssignment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/view-assignment/${params.id}`),
      },
      {
        path: "/my-submitted-assignments",
        element: <MySubmittedAssignments />,
      },
      {
        path: "/pending-assignments",
        element: <PendingAssignments />,
      },
      {
        path: "/pending-assignments/assignment-based/:id",
        element: <AssignmentBased />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/pending-assignments/assignment-based/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

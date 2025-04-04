import { createBrowserRouter } from "react-router-dom";
import { apiUrl } from "../hooks/userServerAPI";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MyBookingList from "../pages/bookings/MyBookingList";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import Search from "../pages/search/Search";
import AddService from "../pages/services/AddService";
import EditService from "../pages/services/EditService";
import ManageServices from "../pages/services/ManageServices";
import ServiceDetails from "../pages/services/ServiceDetails";
import ServicesPage from "../pages/services/ServicesPage";
import StatusToDo from "../pages/services/StatusToDo";
import ToDoService from "../pages/services/ToDoService";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },

      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${apiUrl}/service/${params.id}`),
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [
      {
        index: true,
        path: "add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-services",
        element: (
          <PrivateRoute>
            <ManageServices />
          </PrivateRoute>
        ),
      },
      {
        path: "services/edit/:id",
        element: (
          <PrivateRoute>
            <EditService />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${apiUrl}/service/${params.id}`),
      },
      {
        path: "booked-services",
        element: (
          <PrivateRoute>
            <MyBookingList />
          </PrivateRoute>
        ),
      },
      {
        path: "service-to-do",
        element: (
          <PrivateRoute>
            <ToDoService />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <StatusToDo />
          </PrivateRoute>
        ),

        loader: async ({ params }) =>
          await fetch(`${apiUrl}/booking/${params.id}`),
      },
    ],
  },
]);

export default router;

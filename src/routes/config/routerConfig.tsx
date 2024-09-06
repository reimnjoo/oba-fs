import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/public/auth/Login";
import Register from "../../pages/public/auth/Register";
import Root from "../root";
import ProtectedRoute from "../../routes/ProtectedRoutes";
import Dashboard from "../../pages/private/dashboard/Dashboard";
import Accounts from "../../pages/private/accounts/Accounts";


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Root />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "accounts",
                element: <Accounts />,
            },
            // {
            //     path: "deposit",
            //     element: <Deposit />,
            // },
            // {
            //     path: "withdraw",
            //     element: <Withdraw />,
            // },
            // {
            //     path: "transfer",
            //     element: <Transfer />,
            // },
            // {
            //     path: "audit",
            //     element: <Audit />,
            // },
            // {
            //     path: "settings",
            //     element: <Settings />,
            // },
        ],
    },
]);

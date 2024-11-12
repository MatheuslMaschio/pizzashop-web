import { createBrowserRouter } from "react-router-dom";

import { SignIn } from "./pages/auth/SignIn";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/SignUp";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/dashboard/orders/orders";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, //uso de layout
        children: [
            {path: "/", element: <Dashboard />}, //elemento filho
            {path: "/orders", element: <Orders />},
        ]
    },

    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {path: "/sign-in", element: <SignIn />},
            {path: "/sign-up", element: <SignUp />},
        ]
    }

]);
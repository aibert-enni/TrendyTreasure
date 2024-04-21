import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "*",
        Component: App
    },
    {
        path: "signUp",
        Component: SignUp
    },
    {
        path: "login",
        Component: Login
    }
])

export default router
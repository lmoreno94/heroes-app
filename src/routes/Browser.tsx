import { type RouteObject } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";

const Login = lazy(() => import('../components/Login'));
const Marvel = lazy(() => import('../components/Marvel/Screen'))

export const routerNavigator: RouteObject[] = [
	{
        path: "home",
        element: <h1>Hola Mundo</h1>
    },
    {
        path: "",
        element: <PrivateRoute />,
        children: [
            {
                path: "dashboard",
                element: <DashboardRoutes />,
                children: [
                    {
                        path: "marvel",
                        element: <Marvel />
                    }
                ]
            }
        ]
    },
    {
        path: "login",
        element: <Login />
    }
];

//https://stackoverflow.com/questions/72198467/config-route-in-react-router-dom-v6
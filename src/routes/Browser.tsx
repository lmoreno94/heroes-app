import { type RouteObject } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoute } from "./PrivateRoute";

const Login = lazy(() => import('../components/Login'));

export const routerNavigator: RouteObject[] = [
	{
		path: "",
		children: [
			{
				path: "",
				element: <h1>Hola Mundo</h1>
			},
            {
				element: <PrivateRoute />,
                children: [
                    {
                        path: "home",
                        element: <h1>Home Screen</h1>
                    }
                ]
			},
			{
				path: "login",
				element: <Login />
			}
		],
		
	}
];

//https://stackoverflow.com/questions/72198467/config-route-in-react-router-dom-v6
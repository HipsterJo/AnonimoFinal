import { RouteProps } from "react-router-dom";
import { AboutPage } from "../../../pages/AboutPage";
import { MainPage } from "../../../pages/MainPage";

export enum AppRouter{
    MAIN = 'main',
    ABOUT = 'about',
    ERROR = 'error',

}


export const RoutePath: Record<AppRouter, string> ={
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.ERROR]: '/error',
};

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath[AppRouter.MAIN],
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath[AppRouter.ABOUT],
        element: <AboutPage />,
    },
    [AppRouter.ERROR]: {
        path: RoutePath[AppRouter.ERROR],
        element: <div>404</div>,
    },
}
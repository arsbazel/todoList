import React from 'react';
import {Login} from "../pages/Login";
import App from "../App";

export const LOGIN = '/login'
export const APP = '/'

export interface routeType {
    path: string;
    component: React.FC;
    exact? : boolean
}

export const publicRoutes: routeType[] = [
    {path: LOGIN, exact: true, component: Login}
]
export const privateRoutes: routeType[] = [
    {path: APP, exact: true, component: App}
]
import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}/>)}
                <Redirect from='/' to='/'/>
            </Switch> :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}/>)}
                <Redirect from='/' to='/login'/>
            </Switch>
    )
}


export default AppRouter;
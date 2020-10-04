import React, { useEffect } from 'react';
import { IAppState } from '../../store';
import { Route, Switch } from "react-router";
import { LandingPage } from "components";
import { NavBar } from "components";

export interface AppProps extends IAppState {

}

export const App = React.memo(function () {

    // Runs once, when component is mounted
    useEffect(() => {
        document.title = "SPA Test";
    }, []);

    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </>
    );

});


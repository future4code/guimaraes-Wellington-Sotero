import React from "react";
import { Routes, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Config from './Pages/Config';

export default () => {

    return(
        <Switch>
            <Routes exact path="/">
                <Home />

            </Routes>

            <Routes exact path="/config">
                <config />

            </Routes>

            <Routes exact path="/Pagina3">
                <Pagina3 />

            </Routes>
        </Switch>
    );
}
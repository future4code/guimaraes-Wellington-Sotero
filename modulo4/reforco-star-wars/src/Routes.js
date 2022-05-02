import React from "react";
import { Routes, Switch } from "react-router-dom";
import CharacterDetail from './src/CharacterDetailPage/CharacterDetailPage';
import CharacterList from './src/CharacterListPage/CharacterListPage';

export default () => {

    return(
        <Switch>
            {/* <Routes exact path="/">
                <Home />

            </Routes> */}

            <Routes exact path="/CharacterDetail">
                <CharacterDetail />

            </Routes>

            <Routes exact path="/CharacterList">
                <CharacterList />

            </Routes>
        </Switch>
    );
}
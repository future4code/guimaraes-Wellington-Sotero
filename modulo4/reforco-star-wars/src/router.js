import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetail from './CharacterDatailPage/CharacterDetailPage';
import CharacterList from './CharacterListPage/CharacterListPage';

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>


               <Route index element={<CharacterDetail/ >} />
                             

               <Route path={"/list"} element={<CharacterList/ >} />
                

            </Routes>
        </BrowserRouter>
    );
}

export default Router;
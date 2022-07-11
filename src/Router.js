import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import AllPokemonController from './routes/allPokemon/AllPokemonController';
import DuellController from './routes/duell/DuellController';
import HomeController from './routes/home/HomeController';
import Home from './routes/home/HomeView';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeController />} />
                <Route path="/allPokemon" element={<AllPokemonController />} />
                <Route path="/duell" element={<DuellController />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
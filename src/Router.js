import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './routes/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="allPokemon" element={<AllPokemon />} /> */}
                {/* <Route path="duel" element={<Duel />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
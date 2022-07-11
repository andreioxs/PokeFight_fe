import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PokemonContext } from './contexts/PokemonContext'
import { DeckContext } from './contexts/DeckContext'

import { NavbarContext } from './contexts/NavbarContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonContext>
      <DeckContext>
        <NavbarContext>
          <App />
        </NavbarContext>
      </DeckContext>
    </PokemonContext>
  </React.StrictMode>
);

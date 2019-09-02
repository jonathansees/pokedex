import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonList from './PokemonList';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ PokemonList } />
        </BrowserRouter>
    )
};

export default App;
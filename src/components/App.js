import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/details/:id" exact component={ PokemonDetails } />
            <Route path="/" exact component={ PokemonList } />
        </BrowserRouter>
    )
};

export default App;
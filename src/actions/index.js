import * as actionTypes from './actionTypes';
import pokeapi from '../apis/pokeapi';
import _ from 'lodash';

export const fetchPokemons = () => async dispatch => {
    const response = await pokeapi.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    // const response = await pokeapi.get('https://pokeapi.co/api/v2/pokemon');

    const pokemon = Promise.all(response.data.results.map(async pokemon =>  {
        const response = await pokeapi.get(pokemon.url)
        return response.data
    }))
    
    pokemon.then(function(result) {
        dispatch({
            type: actionTypes.FETCH_POKEMONS,
            payload: result
        })
    })
};

export const fetchPokemon = (id) => async dispatch => {
    const response = await pokeapi.get('https://pokeapi.co/api/v2/pokemon/' + id);

    dispatch({
        type: actionTypes.FETCH_POKEMON,
        payload: response.data
    })
};
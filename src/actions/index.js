import * as actionTypes from './actionTypes';
import pokeapi from '../apis/pokeapi';
import location from '../apis/locationapi';
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

const fetchLocation = async (id) => {
    const response = await location.get('/' + id);

    return response.data.locations
};

export const fetchPokemon = (id) => async dispatch => {
    const response = await pokeapi.get('https://pokeapi.co/api/v2/pokemon/' + id);

    const locations = await fetchLocation(response.data.id);
    response.data.locations = locations;

    dispatch({
        type: actionTypes.FETCH_POKEMON,
        payload: response.data
    })
};

export const updateBag = (id) => async dispatch => {
    dispatch({
        type: actionTypes.UPDATE_BAG,
        payload: id
    })
};

export const toggleBag = (open) => async dispatch => {
    console.log(open)
    dispatch({
        type: actionTypes.TOGGLE_BAG,
        payload: open
    })
};
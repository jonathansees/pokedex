import * as actionTypes from './actionTypes';
import pokeapi from '../apis/pokeapi';
import location from '../apis/locationapi';

export const fetchPokemons = () => async dispatch => {
    const response = await pokeapi.get('?limit=151');
    // const response = await pokeapi.get('https://pokeapi.co/api/v2/pokemon');

    response.data.results.map(pokemon =>  {
        const id = pokemon.url.slice(34, pokemon.url.length - 1)
        pokemon.id = parseInt(id)
    })
    
    dispatch({
        type: actionTypes.FETCH_POKEMONS,
        payload: response.data.results
    })
};

const fetchLocation = async (id) => {
    const response = await location.get('/' + id);

    return response.data.locations
};

export const fetchPokemon = (id) => async dispatch => {
    const response = await pokeapi.get('/' + id);

    const locations = await fetchLocation(response.data.id);
    response.data.locations = locations;

    dispatch({
        type: actionTypes.FETCH_POKEMON,
        payload: response.data
    })
};

export const clearPokemon = () => async dispatch => {
    dispatch({
        type: actionTypes.FETCH_POKEMON,
        payload: []
    })
};

export const updateBag = (id) => async dispatch => {
    dispatch({
        type: actionTypes.UPDATE_BAG,
        payload: id
    })
};

export const toggleBag = (open) => async dispatch => {
    dispatch({
        type: actionTypes.TOGGLE_BAG,
        payload: open
    })
};
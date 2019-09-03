import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';
import pokemonReducer from './pokemonReducer';
import bagReducer from './bagReducer';
import toggleBagReducer from './toggleBagReducer';

export default combineReducers({
    pokemons: pokemonListReducer,
    pokemon: pokemonReducer,
    bag: bagReducer,
    bagOpen: toggleBagReducer
});
import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

export default (state = [], action) => {
    switch(action.type) {
        case actionTypes.UPDATE_BAG:
            console.log(state)
            return !state.includes(action.payload) ? [...state, action.payload]
            : state.filter((id) => id !== action.payload)
        default:
            return state;
    }
}
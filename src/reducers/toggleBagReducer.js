import * as actionTypes from '../actions/actionTypes';

export default (state = false, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_BAG:
            return action.payload;
        default:
            return state;
    }
}
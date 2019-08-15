import {INC, DEC} from '../actions/types';

const INITIAL = {number: 4};

export default (state = INITIAL, action) => {

    switch (action.type) {
        case INC:
            
            return {...state, number: action.payload};

        case DEC:
            return {...state, number: action.payload};

        default:
            return state;
    }

}

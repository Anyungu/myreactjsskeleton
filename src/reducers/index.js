
import {combineReducers} from 'redux';

import increaseDecreaseReducers from './increaseDecreaseReducers';


export default combineReducers ({
    incdec : increaseDecreaseReducers
});
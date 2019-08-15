
import {DEC} from './types';

export function decreaseNumber(num) {
    
    if (num === 0) {
        
        const action = {
            type: DEC,
            payload: num
        }
        return action;

    } else {

        var newNum = num-1;
        const action = {
            type: DEC,
            payload: newNum
        }
        return action;
        
    }

    

    
}
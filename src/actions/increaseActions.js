import {INC} from './types';

export function increaseNumber(num) {
    
   var newNum = num+1;
    const action = {
        type: INC,
        payload: newNum
    }

    return action;
}
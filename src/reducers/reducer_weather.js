import {FETCH_WEATHER}  from '../actions/index';

export default function(state= [],action){
    console.log(action);
    switch(action.type){
        case 'FETCH_WEATHER':
        console.log('Not Reached',action.payload.data);
        return [action.payload.data,...state];
    }
    return state;
}
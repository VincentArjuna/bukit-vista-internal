import actions from './actions';
const initState={
    date:null,
    filterType:0,
    filterValue:null,
    dateType:0,
    reset:false
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.GET_CSV:
            return{
                ...state,
                date:action.payload.date,
            };
        default:
            return state;
    }
}
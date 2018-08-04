import actions from './actions';
const initState={
    filterType:0,
    filterValue:null,
    reset:false,
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
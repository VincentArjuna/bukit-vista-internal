import actions from './actions';

const initState={
    results:[],
    param:null,
    filter:null,
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_BC:
            return{
                ...state,
                param:action.payload.param,
            };
        case actions.FILTER_DATA_BC:
            return{
                ...state,
                param:action.payload.param,
            }
        case actions.RENDER_DATA_SUCCESS_BC:
            return{
                ...state,
                results:action.results
            };
        default:
            return state;
    }
}

import actions from './actions';

const initState={
    results:[],
    value:null,
    fetching:false,
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_LISTING:
            return{
                ...state,
                fetching:true
            };
        case actions.RENDER_DATA_LISTING_SUCCESS:
            return{
                ...state,
                results:action.results,
                fetching:false
            };
        default:
            return state;
    }
}
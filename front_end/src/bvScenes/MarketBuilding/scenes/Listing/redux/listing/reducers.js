import actions from './actions';

const initState={
    results:[]
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_LISTING:
        console.log("ai");
            return{
                ...state,
            };
        case actions.RENDER_DATA_LISTING_SUCCESS:
            console.log("oi");
            return{
                ...state,
                results:action.results
            };
        default:
            return state;
    }
}
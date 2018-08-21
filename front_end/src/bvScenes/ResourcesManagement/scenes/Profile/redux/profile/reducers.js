import actions from './actions';

const initState={
    results:[],
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_PROFILE:
            return{
                ...state,
            };
        case actions.RENDER_DATA_PROFILE_SUCCESS:
            return{
                ...state,
                results:action.results
            };
        case actions.ADD_PROFILE:
            return{
                ...state,
            };
        case actions.EDIT_PROFILE:
            return{
                ...state,
            };
        default:
            return state;
    }
}
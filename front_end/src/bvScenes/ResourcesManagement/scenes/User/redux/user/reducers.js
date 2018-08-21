import actions from './actions';

const initState={
    results:[],
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_USER:
            return{
                ...state,
            };
        case actions.RENDER_DATA_USER_SUCCESS:
            return{
                ...state,
                results:action.results
            };
        case actions.ADD_USER:
            return{
                ...state,
            };
        case actions.RESET_PASSWORD_USER:
            return{
                ...state,
            };
        default:
            return state;
    }
}
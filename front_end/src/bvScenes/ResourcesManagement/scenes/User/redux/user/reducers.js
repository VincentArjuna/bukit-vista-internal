import actions from './actions';

const initState={
    results:[],
    total:0,
    page:1
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
                results:action.results,
                total:action.total,
                page:action.page
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
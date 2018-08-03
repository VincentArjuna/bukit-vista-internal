import actions from './actions';

const initState={
    results:[]
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_EMPLOYEE:
            return{
                ...state,
            };
        case actions.RENDER_DATA_EMPLOYEE_SUCCESS:
            return{
                ...state,
                results:action.results
            };
        default:
            return state;
    }
}
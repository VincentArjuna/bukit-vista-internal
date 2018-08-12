import actions from './actions';

const initState={
    results:[],
    fetching:false,
    page:1
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_UNIT:
            return{
                ...state,
                fetching:true,
            };
        case actions.RENDER_DATA_UNIT_SUCCESS:
            return{
                ...state,
                results:action.results,
                fetching:false,
                page:action.page,
                total:action.total,
            };
        case actions.ADD_UNIT:
            return{
                ...state,
                payload:action.payload
            };
        case actions.EDIT_UNIT:
            return{
                ...state,
                payload:action.payload
            };
        default:
            return state;
    }
}
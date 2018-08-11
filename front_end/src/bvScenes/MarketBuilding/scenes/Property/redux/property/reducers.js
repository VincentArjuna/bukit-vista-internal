import actions from './actions';

const initState={
    results:[],
    value:null,
    fetching:false,
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_PROPERTY:
            return{
                ...state,
                fetching:true
            };
        case actions.RENDER_DATA_PROPERTY_SUCCESS:
            return{
                ...state,
                results:action.results,
                fetching:false,
                page:action.page,
                total:action.total,
            };
        case actions.ADD_PROPERTY:
            return{
                ...state,
                payload:action.payload
            }
        default:
            return state;
    }
}
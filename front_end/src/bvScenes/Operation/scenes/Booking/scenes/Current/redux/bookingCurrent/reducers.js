import actions from './actions';

const initState={
    results:[],
    page:1,
    total:0,
    page:1
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_BC:
            return{
                ...state,
                date:action.payload.date,
                filterer:action.payload.filterer,
                date_type:action.payload.date_type,
                filter_type:action.payload.filter_type
            };
        case actions.RENDER_DATA_SUCCESS_BC:
            return{
                ...state,
                results:action.results,
                page:action.current_page,
                total:action.total
            };
        default:
            return state;
    }
}

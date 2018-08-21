import actions from './actions';

const initState={
    results:[],
    page:1,
    total:0,
    response:""
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_BC:
            return{
                ...state,
                date:action.payload.date,
                filterer:action.payload.filterer,
                date_type:action.payload.date_type,
                filter_type:action.payload.filter_type,
            };
        case actions.RENDER_DATA_SUCCESS_BC:
            return{
                ...state,
                results:action.results,
                page:action.page,
                total:action.total
            };
        case actions.ADD_BOOKING:
            return{
                ...state,
                payload:action.payload
            }
        case actions.ADD_BOOKING_RESPONSE:
            return{
                ...state,
                response:action.response
            }
        case actions.EDIT_BOOKING:
            return{
                ...state,
                payload:action.payload
            };
        case actions.EDIT_BOOKING_ALL:
            return{
                ...state,
                payload:action.payload
            }
        case actions.EDIT_BOOKING_RESPONSE:
            return{
                ...state,
                response:action.response
            };
        case actions.DOWNLOAD_CSV:
            return{
                ...state,
                response:action.response
            }
        default:
            return state;
    }
}

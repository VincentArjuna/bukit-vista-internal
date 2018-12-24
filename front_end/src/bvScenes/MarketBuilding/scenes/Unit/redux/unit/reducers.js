import actions from './actions';

const initState={
    results:[],
    fetching:false,
    page:1,
    notificationMessage:null
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_UNIT:
            return{
                ...state,
                fetching:true,
                notificationMessage:null
            };
        case actions.RENDER_DATA_UNIT_SUCCESS:
            return{
                ...state,
                results:action.results,
                fetching:false,
                page:action.page,
                total:action.total,
                notificationMessage:null
            };
        case actions.ADD_UNIT:
            return{
                ...state,
                payload:action.payload,
                notificationMessage:null
            };
        case actions.EDIT_UNIT:
            return{
                ...state,
                payload:action.payload,
                notificationMessage:null
            };
        case actions.ADD_UNIT_RESPONSE:
            return{
                ...state,
                notificationMessage:action.message
            };
        case actions.EDIT_UNIT_RESPONSE:
            return{
                ...state,
                notificationMessage:action.message
            }
        default:
            return state;
    }
}
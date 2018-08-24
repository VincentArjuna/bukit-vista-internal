import actions from './actions';

const initState={
    results:[],
    value:null,
    fetching:false,
    page:1,
    notificationMessage:null
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_PROPERTY:
            return{
                ...state,
                fetching:true,
                notificationMessage:null
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
                payload:action.payload,
                notificationMessage:null
            }
        case actions.EDIT_PROPERTY:
            return{
                ...state,
                payload:action.payload,
                notificationMessage:null
            }
        case actions.ADD_PROPERTY_RESPONSE:
            return{
                ...state,
                notificationMessage:action.message
            }
        case actions.EDIT_PROPERTY_RESPONSE:
            return{
                ...state,
                notificationMessage:action.message
            }
        default:
            return state;
    }
}
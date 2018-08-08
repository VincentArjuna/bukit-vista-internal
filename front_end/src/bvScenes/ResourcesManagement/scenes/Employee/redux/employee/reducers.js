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
        case actions.EDIT_BOOKING_EMPLOYEE:
            return{
                ...state,
                booking_id:action.payload.booking_id,
                employee_id:action.payload.employee_id,
                be_role:action.payload.be_role
            };
        case actions.EDIT_BOOKING_EMPLOYEE_RESPONSE:
            return{
                ...state,
                response:action.response
            };
        default:
            return state;
    }
}
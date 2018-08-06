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
        case actions.EDIT_BOOKING:
            return{
                ...state,
                update_type:action.payload.updateType,
                booking_id:action.payload.booking_id,
                booking_check_out:action.payload.booking_check_out,
                booking_guest_eta:action.payload.booking_guest_eta,
                booking_guest_status:action.payload.booking_guest_status,
                booking_guest_phone:action.payload.booking_guest_phone,
                booking_comm_channel:action.payload.booking_comm_channel,
                booking_notes:action.payload.booking_notes
            };
        case actions.EDIT_BOOKING_EMPLOYEE:
            return{
                ...state,
                booking_id:action.payload.booking_id,
                employee_id:action.payload.employee_id,
                be_role:action.payload.be_role
            };
        case actions.EDIT_BOOKING_RESPONSE:
            return{
                ...state,
                response:action.response
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
const actions={
    RENDER_DATA_EMPLOYEE:'RENDER_DATA_EMPLOYEE',
    RENDER_DATA_EMPLOYEE_SUCCESS:'RENDER_DATA_EMPLOYEE_SUCCESS',
    UPDATE_ARRIVAL_LIST:'UPDATE_ARRIVAL_LIST',
    EDIT_BOOKING: 'EDIT_BOOKING',
    EDIT_BOOKING_EMPLOYEE:'EDIT_BOOKING_EMPLOYEE',
    EDIT_BOOKING_RESPONSE:'EDIT_BOOKING_RESPONSE',
    EDIT_BOOKING_EMPLOYEE_RESPONSE:'EDIT_BOOKING_EMPLOYEE_RESPONSE',

    editBooking :(booking_id,booking_check_out,booking_guest_eta,booking_guest_status)=>({
        type:actions.EDIT_BOOKING,
        payload:{updateType:1,booking_id,booking_check_out,booking_guest_eta,booking_guest_status}
    }),
    editBookingEmployee:(booking_id,employee_id,be_role)=>({
        type:actions.EDIT_BOOKING_EMPLOYEE,
        payload:{booking_id,employee_id,be_role}
    }),
    renderDataEmployee : ()=>({
        type: actions.RENDER_DATA_EMPLOYEE
    }),
    renderDataEmployeeSuccess:results=>({
        type: actions.RENDER_DATA_EMPLOYEE_SUCCESS,
        results
    }),
    updateData:()=>({
        type:actions.UPDATE_ARRIVAL_LIST,
    }),
    editBookingResponse:(response)=>({
        type:actions.EDIT_BOOKING_RESPONSE,
        response
    }),
    editBookingEmployeeResponse:(response)=>({
        type:actions.EDIT_BOOKING_EMPLOYEE_RESPONSE,
        response
    }),
};

export default actions;
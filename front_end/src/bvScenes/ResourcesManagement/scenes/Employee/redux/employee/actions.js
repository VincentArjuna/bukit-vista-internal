const actions={
    RENDER_DATA_EMPLOYEE:'RENDER_DATA_EMPLOYEE',
    RENDER_DATA_EMPLOYEE_SUCCESS:'RENDER_DATA_EMPLOYEE_SUCCESS',
    EDIT_BOOKING_EMPLOYEE:'EDIT_BOOKING_EMPLOYEE',
    EDIT_BOOKING_EMPLOYEE_RESPONSE:'EDIT_BOOKING_EMPLOYEE_RESPONSE',

    renderDataEmployee : ()=>({
        type: actions.RENDER_DATA_EMPLOYEE
    }),
    renderDataEmployeeSuccess:results=>({
        type: actions.RENDER_DATA_EMPLOYEE_SUCCESS,
        results
    }),
    editBookingEmployee:(booking_id,employee_id,be_role)=>({
        type:actions.EDIT_BOOKING_EMPLOYEE,
        payload:{booking_id,employee_id,be_role}
    }),
    editBookingEmployeeResponse:(response)=>({
        type:actions.EDIT_BOOKING_EMPLOYEE_RESPONSE,
        response
    }),
}

export default actions;
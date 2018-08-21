const actions={
    RENDER_DATA_EMPLOYEE:'RENDER_DATA_EMPLOYEE',
    RENDER_DATA_EMPLOYEE_SUCCESS:'RENDER_DATA_EMPLOYEE_SUCCESS',
    EDIT_BOOKING_EMPLOYEE:'EDIT_BOOKING_EMPLOYEE',
    EDIT_BOOKING_EMPLOYEE_RESPONSE:'EDIT_BOOKING_EMPLOYEE_RESPONSE',
    ADD_EMPLOYEE:'ADD_EMPLOYEE',
    ADD_EMPLOYEE_SUCCESS:'ADD_EMPLOYEE_SUCCESS',
    EDIT_EMPLOYEE:'EDIT_EMPLOYEE',
    renderDataEmployee : ()=>({
        type: actions.RENDER_DATA_EMPLOYEE
    }),
    renderDataEmployeeSuccess:results=>({
        type: actions.RENDER_DATA_EMPLOYEE_SUCCESS,
        results
    }),
    editBookingEmployee:(booking_id,employee_id,be_role,employeeType)=>({
        type:actions.EDIT_BOOKING_EMPLOYEE,
        payload:{booking_id,employee_id,be_role,employeeType}
    }),
    editBookingEmployeeResponse:(response,employeeType)=>({
        type:actions.EDIT_BOOKING_EMPLOYEE_RESPONSE,
        response,
        employeeType
    }),
    addEmployee:(name,address,phone,status)=>({
        type:actions.ADD_EMPLOYEE,
        payload:{name,address,phone,status}
    }),
    editEmployee:(name,address,phone,status,id)=>({
        type:actions.EDIT_EMPLOYEE,
        payload:{name,address,phone,status,id}
    }),
}

export default actions;
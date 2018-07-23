const actions={
    RENDER_DATA_EMPLOYEE:'RENDER_DATA_EMPLOYEE',
    RENDER_DATA_EMPLOYEE_SUCCESS:'RENDER_DATA_EMPLOYEE_SUCCESS',
    UPDATE_ARRIVAL_LIST:'UPDATE_ARRIVAL_LIST',
    renderDataEmployee : ()=>({
        type: actions.RENDER_DATA_EMPLOYEE
    }),
    renderDataEmployeeSuccess:results=>({
        type: actions.RENDER_DATA_EMPLOYEE_SUCCESS,
        results
    }),
    updateData:()=>({
        type:actions.UPDATE_ARRIVAL_LIST,
    })
};

export default actions;
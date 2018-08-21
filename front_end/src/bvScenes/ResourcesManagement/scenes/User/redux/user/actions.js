const actions={
    RENDER_DATA_USER:'RENDER_DATA_USER',
    RENDER_DATA_USER_SUCCESS:'RENDER_DATA_USER_SUCCESS',
    ADD_USER:'ADD_USER',
    RESET_PASSWORD_USER:'RESET_PASSWORD_USER',
    renderDataUser : ()=>({
        type: actions.RENDER_DATA_USER
    }),
    renderDataUserSuccess:results=>({
        type: actions.RENDER_DATA_USER_SUCCESS,
        results
    }),
    addUser:(email,password,employee)=>({
        type:actions.ADD_USER,
        payload:{email,password,employee}
    }),
    resetPassword:(email,password,id)=>({
        type:actions.RESET_PASSWORD_USER,
        payload:{email,password,id}
    }),
}

export default actions;
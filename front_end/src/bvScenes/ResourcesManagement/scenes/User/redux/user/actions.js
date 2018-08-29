const actions={
    RENDER_DATA_USER:'RENDER_DATA_USER',
    RENDER_DATA_USER_SUCCESS:'RENDER_DATA_USER_SUCCESS',
    ADD_USER:'ADD_USER',
    RESET_PASSWORD_USER:'RESET_PASSWORD_USER',
    RENDER_PAGE_COUNT:'RENDER_PAGE_COUNT',
    RENDER_PAGE_COUNT_SUCCESS:'RENDER_PAGE_COUNT_SUCCESS',
    renderDataUser : ()=>({
        type: actions.RENDER_DATA_USER,
        payload:{page:1}
    }),
    renderDataUserSuccess:(results,total,page)=>({
        type: actions.RENDER_DATA_USER_SUCCESS,
        results,
        total,
        page
    }),
    onPageChange:(page)=>({
        type:actions.RENDER_DATA_USER,
        payload:{page}
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
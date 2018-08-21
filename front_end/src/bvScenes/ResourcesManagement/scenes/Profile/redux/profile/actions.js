const actions={
    RENDER_DATA_PROFILE:'RENDER_DATA_PROFILE',
    RENDER_DATA_PROFILE_SUCCESS:'RENDER_DATA_PROFILE_SUCCESS',
    EDIT_PROFILE:'EDIT_PROFILE',
    EDIT_PROFILE_RESPONSE:'EDIT_PROFILE_RESPONSE',
    ADD_PROFILE:'ADD_PROFILE',

    renderDataProfile:()=>({
        type: actions.RENDER_DATA_PROFILE
    }),
    renderDataProfileSuccess:results=>({
        type: actions.RENDER_DATA_PROFILE_SUCCESS,
        results
    }),
    addProfile:(name,email)=>({
        type:actions.ADD_PROFILE,
        payload:{name,email}
    }),
    editProfile:(name,email,id)=>({
        type:actions.EDIT_PROFILE,
        payload:{name,email,id}
    })
}

export default actions;
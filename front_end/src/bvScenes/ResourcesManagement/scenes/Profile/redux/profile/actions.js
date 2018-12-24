const actions={
    RENDER_DATA_PROFILE:'RENDER_DATA_PROFILE',
    RENDER_DATA_PROFILE_SUCCESS:'RENDER_DATA_PROFILE_SUCCESS',
    EDIT_PROFILE:'EDIT_PROFILE',
    EDIT_PROFILE_RESPONSE:'EDIT_PROFILE_RESPONSE',
    ADD_PROFILE:'ADD_PROFILE',
    PAGE_COUNT:'PAGE_COUNT',
    PAGE_COUNT_SUCCESS:'PAGE_COUNT_SUCCESS',
    DATA_PROFILE_RENDERED:'DATA_PROFILE_RENDERED',
    renderDataProfile:()=>({
        type:actions.RENDER_DATA_PROFILE,
        payload:{page:1}
    }),
    onPageChange:(page)=>({
        type:actions.RENDER_DATA_PROFILE,
        payload:{page}
    }),
    renderDataProfileSuccess:(results,total,page)=>({
        type: actions.RENDER_DATA_PROFILE_SUCCESS,
        results,
        total,
        page
    }),
    addProfile:(name,email)=>({
        type:actions.ADD_PROFILE,
        payload:{name,email}
    }),
    editProfile:(name,email,id)=>({
        type:actions.EDIT_PROFILE,
        payload:{name,email,id}
    }),
    pageCountProfile:()=>({
        type:actions.PAGE_COUNT,
        payload:{page:1}
    }),
    pageCountProfileSuccess:(totalData)=>({
        type:actions.PAGE_COUNT_SUCCESS,
        totalData,
    }),
    dataProfileRendered:()=>({
        type:actions.DATA_PROFILE_RENDERED,
    })
}

export default actions;
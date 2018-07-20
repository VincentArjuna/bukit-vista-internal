const actions={
    RENDER_DATA:'RENDER_DATA',
    RENDER_DATA_SUCCESS :'RENDER_DATA_SUCCESS',
    ADD_NOTES:'ADD_NOTES',
    RENDER_NOTES:'RENDER_NOTES',
    renderData : area=>({
        type: actions.RENDER_DATA,
        payload:{area}
    }),
    renderDataSuccess:results=>({
        type: actions.RENDER_DATA_SUCCESS,
        results
    }),
};

export default actions;
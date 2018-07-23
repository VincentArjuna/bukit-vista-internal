const actions={
    RENDER_DATA2:'RENDER_DATA2',
    RENDER_DATA_SUCCESS2 :'RENDER_DATA_SUCCESS2',
    ADD_NOTES2:'ADD_NOTES2',
    RENDER_NOTES2:'RENDER_NOTES2',
    renderData2 : area=>({
        type: actions.RENDER_DATA2,
        payload:{area}
    }),
    renderDataSuccess2:results=>({
        type: actions.RENDER_DATA_SUCCESS2,
        results
    }),
};

export default actions;
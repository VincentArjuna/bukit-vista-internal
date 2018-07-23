const actions={
    RENDER_DATA4:'RENDER_DATA4',
    RENDER_DATA_SUCCESS4 :'RENDER_DATA_SUCCESS4',
    ADD_NOTES4:'ADD_NOTES4',
    RENDER_NOTES4:'RENDER_NOTES4',
    renderData4 : area=>({
        type: actions.RENDER_DATA4,
        payload:{area}
    }),
    renderDataSuccess4:results=>({
        type: actions.RENDER_DATA_SUCCESS4,
        results
    }),
};

export default actions;
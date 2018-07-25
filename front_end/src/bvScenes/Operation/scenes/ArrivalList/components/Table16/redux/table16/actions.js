const actions={
    RENDER_DATA16:'RENDER_DATA16',
    RENDER_DATA_SUCCESS16 :'RENDER_DATA_SUCCESS16',
    ADD_NOTES16:'ADD_NOTES16',
    RENDER_NOTES16:'RENDER_NOTES16',
    FILTER_DATA_AL16:'FILTER_DATA_AL16',
    renderData16 : (area,date)=>({
        type: actions.RENDER_DATA16,
        payload:{area,date}
    }),
    renderDataSuccess16:results=>({
        type: actions.RENDER_DATA_SUCCESS16,
        results
    }),
    filterDataAl16:(param,filter) =>({
        type:actions.FILTER_DATA_AL16,
        payload:{param,filter}
    }),
};

export default actions;
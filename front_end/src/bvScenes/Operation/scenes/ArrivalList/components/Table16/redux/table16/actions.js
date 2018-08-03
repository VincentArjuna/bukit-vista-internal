const actions={
    RENDER_DATA16:'RENDER_DATA16',
    RENDER_DATA_SUCCESS16:'RENDER_DATA_SUCCESS16',
    ADD_NOTES16:'ADD_NOTES16',
    RENDER_NOTES16:'RENDER_NOTES16',
    renderData16 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA16,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess16:(results)=>({
        type: actions.RENDER_DATA_SUCCESS16,
        results
    })
};

export default actions;
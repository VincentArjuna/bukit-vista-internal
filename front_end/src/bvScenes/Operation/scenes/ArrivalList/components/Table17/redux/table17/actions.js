const actions={
    RENDER_DATA17:'RENDER_DATA17',
    RENDER_DATA_SUCCESS17:'RENDER_DATA_SUCCESS17',
    ADD_NOTES17:'ADD_NOTES17',
    RENDER_NOTES17:'RENDER_NOTES17',
    renderData17 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA17,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess17:(results)=>({
        type: actions.RENDER_DATA_SUCCESS17,
        results
    })
};

export default actions;
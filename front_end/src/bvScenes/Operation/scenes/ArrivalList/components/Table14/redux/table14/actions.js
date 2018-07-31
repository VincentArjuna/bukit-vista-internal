const actions={
    RENDER_DATA14:'RENDER_DATA14',
    RENDER_DATA_SUCCESS14:'RENDER_DATA_SUCCESS14',
    ADD_NOTES14:'ADD_NOTES14',
    RENDER_NOTES14:'RENDER_NOTES14',
    renderData14 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA14,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess14:(results)=>({
        type: actions.RENDER_DATA_SUCCESS14,
        results
    })
};

export default actions;
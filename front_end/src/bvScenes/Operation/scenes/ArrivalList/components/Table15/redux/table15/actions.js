const actions={
    RENDER_DATA15:'RENDER_DATA15',
    RENDER_DATA_SUCCESS15:'RENDER_DATA_SUCCESS15',
    ADD_NOTES15:'ADD_NOTES15',
    RENDER_NOTES15:'RENDER_NOTES15',
    renderData15 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA15,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess15:(results)=>({
        type: actions.RENDER_DATA_SUCCESS15,
        results
    })
};

export default actions;
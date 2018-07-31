const actions={
    RENDER_DATA8:'RENDER_DATA8',
    RENDER_DATA_SUCCESS8:'RENDER_DATA_SUCCESS8',
    ADD_NOTES8:'ADD_NOTES8',
    RENDER_NOTES8:'RENDER_NOTES8',
    renderData8 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA8,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess8:(results)=>({
        type: actions.RENDER_DATA_SUCCESS8,
        results
    })
};

export default actions;
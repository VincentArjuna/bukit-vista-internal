const actions={
    RENDER_DATA7:'RENDER_DATA7',
    RENDER_DATA_SUCCESS7:'RENDER_DATA_SUCCESS7',
    ADD_NOTES7:'ADD_NOTES7',
    RENDER_NOTES7:'RENDER_NOTES7',
    renderData7 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA7,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess7:(results)=>({
        type: actions.RENDER_DATA_SUCCESS7,
        results
    })
};

export default actions;
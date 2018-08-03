const actions={
    RENDER_DATA21:'RENDER_DATA21',
    RENDER_DATA_SUCCESS21:'RENDER_DATA_SUCCESS21',
    ADD_NOTES21:'ADD_NOTES21',
    RENDER_NOTES21:'RENDER_NOTES21',
    renderData21 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA21,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess21:(results)=>({
        type: actions.RENDER_DATA_SUCCESS21,
        results
    })
};

export default actions;
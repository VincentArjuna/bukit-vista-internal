const actions={
    RENDER_DATA19:'RENDER_DATA19',
    RENDER_DATA_SUCCESS19:'RENDER_DATA_SUCCESS19',
    ADD_NOTES19:'ADD_NOTES19',
    RENDER_NOTES19:'RENDER_NOTES19',
    renderData19 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA19,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess19:(results)=>({
        type: actions.RENDER_DATA_SUCCESS19,
        results
    })
};

export default actions;
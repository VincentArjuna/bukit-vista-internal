const actions={
    RENDER_DATA12:'RENDER_DATA12',
    RENDER_DATA_SUCCESS12:'RENDER_DATA_SUCCESS12',
    ADD_NOTES12:'ADD_NOTES12',
    RENDER_NOTES12:'RENDER_NOTES12',
    renderData12 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA12,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess12:(results)=>({
        type: actions.RENDER_DATA_SUCCESS12,
        results
    })
};

export default actions;
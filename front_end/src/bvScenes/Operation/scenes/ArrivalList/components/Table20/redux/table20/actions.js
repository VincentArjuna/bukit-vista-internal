const actions={
    RENDER_DATA20:'RENDER_DATA20',
    RENDER_DATA_SUCCESS20:'RENDER_DATA_SUCCESS20',
    ADD_NOTES20:'ADD_NOTES20',
    RENDER_NOTES20:'RENDER_NOTES20',
    renderData20 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA20,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess20:(results)=>({
        type: actions.RENDER_DATA_SUCCESS20,
        results
    })
};

export default actions;
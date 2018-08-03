const actions={
    RENDER_DATA5:'RENDER_DATA5',
    RENDER_DATA_SUCCESS5:'RENDER_DATA_SUCCESS5',
    ADD_NOTES5:'ADD_NOTES5',
    RENDER_NOTES5:'RENDER_NOTES5',
    renderData5 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA5,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess5:(results)=>({
        type: actions.RENDER_DATA_SUCCESS5,
        results
    })
};

export default actions;
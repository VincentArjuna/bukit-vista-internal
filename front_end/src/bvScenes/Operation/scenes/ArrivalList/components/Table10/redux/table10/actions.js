const actions={
    RENDER_DATA10:'RENDER_DATA10',
    RENDER_DATA_SUCCESS10:'RENDER_DATA_SUCCESS10',
    ADD_NOTES10:'ADD_NOTES10',
    RENDER_NOTES10:'RENDER_NOTES10',
    renderData10 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA10,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess10:(results)=>({
        type: actions.RENDER_DATA_SUCCESS10,
        results
    })
};

export default actions;
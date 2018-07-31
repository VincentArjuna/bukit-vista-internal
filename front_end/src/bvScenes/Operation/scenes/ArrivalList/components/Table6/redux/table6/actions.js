const actions={
    RENDER_DATA6:'RENDER_DATA6',
    RENDER_DATA_SUCCESS6:'RENDER_DATA_SUCCESS6',
    ADD_NOTES6:'ADD_NOTES6',
    RENDER_NOTES6:'RENDER_NOTES6',
    renderData6 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA6,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess6:(results)=>({
        type: actions.RENDER_DATA_SUCCESS6,
        results
    })
};

export default actions;
const actions={
    RENDER_DATA15:'RENDER_DATA15',
    RENDER_DATA_SUCCESS15 :'RENDER_DATA_SUCCESS15',
    ADD_NOTES15:'ADD_NOTES15',
    RENDER_NOTES15:'RENDER_NOTES15',
    FILTER_DATA_AL15:'FILTER_DATA_AL15',
    renderData15 : (area,date)=>({
        type: actions.RENDER_DATA15,
        payload:{area,date}
    }),
    renderDataSuccess15:results=>({
        type: actions.RENDER_DATA_SUCCESS15,
        results
    }),
    filterDataAl15:(param,filter) =>({
        type:actions.FILTER_DATA_AL15,
        payload:{param,filter}
    }),
};

export default actions;
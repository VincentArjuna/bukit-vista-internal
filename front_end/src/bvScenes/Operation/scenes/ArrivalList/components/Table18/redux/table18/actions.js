const actions={
    RENDER_DATA18:'RENDER_DATA18',
    RENDER_DATA_SUCCESS18:'RENDER_DATA_SUCCESS18',
    ADD_NOTES18:'ADD_NOTES18',
    RENDER_NOTES18:'RENDER_NOTES18',
    renderData18 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA18,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess18:(results)=>({
        type: actions.RENDER_DATA_SUCCESS18,
        results
    })
};

export default actions;
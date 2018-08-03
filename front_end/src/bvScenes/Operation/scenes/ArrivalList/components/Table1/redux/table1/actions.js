const actions={
    RENDER_DATA1:'RENDER_DATA1',
    RENDER_DATA_SUCCESS1:'RENDER_DATA_SUCCESS1',
    ADD_NOTES1:'ADD_NOTES1',
    RENDER_NOTES1:'RENDER_NOTES1',
    renderData1 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA1,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess1:(results)=>({
        type: actions.RENDER_DATA_SUCCESS1,
        results
    })
};

export default actions;
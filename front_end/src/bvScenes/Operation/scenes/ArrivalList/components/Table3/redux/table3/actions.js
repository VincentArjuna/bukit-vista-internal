const actions={
    RENDER_DATA3:'RENDER_DATA3',
    RENDER_DATA_SUCCESS3:'RENDER_DATA_SUCCESS3',
    ADD_NOTES3:'ADD_NOTES3',
    RENDER_NOTES3:'RENDER_NOTES3',
    renderData3 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA3,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess3:(results)=>({
        type: actions.RENDER_DATA_SUCCESS3,
        results
    })
};

export default actions;
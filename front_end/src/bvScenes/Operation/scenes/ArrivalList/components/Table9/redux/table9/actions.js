const actions={
    RENDER_DATA9:'RENDER_DATA9',
    RENDER_DATA_SUCCESS9:'RENDER_DATA_SUCCESS9',
    ADD_NOTES9:'ADD_NOTES9',
    RENDER_NOTES9:'RENDER_NOTES9',
    renderData9 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA9,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess9:(results)=>({
        type: actions.RENDER_DATA_SUCCESS9,
        results
    })
};

export default actions;
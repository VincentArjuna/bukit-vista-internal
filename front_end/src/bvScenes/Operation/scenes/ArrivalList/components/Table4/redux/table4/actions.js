const actions={
    RENDER_DATA4:'RENDER_DATA4',
    RENDER_DATA_SUCCESS4:'RENDER_DATA_SUCCESS4',
    ADD_NOTES4:'ADD_NOTES4',
    RENDER_NOTES4:'RENDER_NOTES4',
    renderData4 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA4,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess4:(results)=>({
        type: actions.RENDER_DATA_SUCCESS4,
        results
    })
};

export default actions;
const actions={
    RENDER_DATA13:'RENDER_DATA13',
    RENDER_DATA_SUCCESS13:'RENDER_DATA_SUCCESS13',
    ADD_NOTES13:'ADD_NOTES13',
    RENDER_NOTES13:'RENDER_NOTES13',
    renderData13 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA13,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess13:(results)=>({
        type: actions.RENDER_DATA_SUCCESS13,
        results
    })
};

export default actions;
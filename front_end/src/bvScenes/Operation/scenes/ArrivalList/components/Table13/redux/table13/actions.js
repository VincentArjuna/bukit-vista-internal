const actions={
    RENDER_DATA13:'RENDER_DATA13',
    RENDER_DATA_SUCCESS13 :'RENDER_DATA_SUCCESS13',
    ADD_NOTES13:'ADD_NOTES13',
    RENDER_NOTES13:'RENDER_NOTES13',
    FILTER_DATA_AL13:'FILTER_DATA_AL13',
    renderData13 : (area,date)=>({
        type: actions.RENDER_DATA13,
        payload:{area,date}
    }),
    renderDataSuccess13:results=>({
        type: actions.RENDER_DATA_SUCCESS13,
        results
    }),
    filterDataAl13:(param,filter) =>({
        type:actions.FILTER_DATA_AL13,
        payload:{param,filter}
    }),
};

export default actions;
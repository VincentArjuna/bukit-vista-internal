const actions={
    RENDER_DATA14:'RENDER_DATA14',
    RENDER_DATA_SUCCESS14 :'RENDER_DATA_SUCCESS14',
    ADD_NOTES14:'ADD_NOTES14',
    RENDER_NOTES14:'RENDER_NOTES14',
    FILTER_DATA_AL14:'FILTER_DATA_AL14',
    renderData14 : (area,date)=>({
        type: actions.RENDER_DATA14,
        payload:{area,date}
    }),
    renderDataSuccess14:results=>({
        type: actions.RENDER_DATA_SUCCESS14,
        results
    }),
    filterDataAl14:(param,filter) =>({
        type:actions.FILTER_DATA_AL14,
        payload:{param,filter}
    }),
};

export default actions;
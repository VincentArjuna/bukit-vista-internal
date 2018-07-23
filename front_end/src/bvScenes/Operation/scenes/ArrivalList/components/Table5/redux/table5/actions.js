const actions={
    RENDER_DATA5:'RENDER_DATA5',
    RENDER_DATA_SUCCESS5 :'RENDER_DATA_SUCCESS5',
    ADD_NOTES5:'ADD_NOTES5',
    RENDER_NOTES5:'RENDER_NOTES5',
    FILTER_DATA_AL5:'FILTER_DATA_AL5',
    renderData5 : (area,date)=>({
        type: actions.RENDER_DATA5,
        payload:{area,date}
    }),
    renderDataSuccess5:results=>({
        type: actions.RENDER_DATA_SUCCESS5,
        results
    }),
    filterDataAl5:(param,filter) =>({
        type:actions.FILTER_DATA_AL5,
        payload:{param,filter}
    }),
};

export default actions;
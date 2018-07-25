const actions={
    RENDER_DATA17:'RENDER_DATA17',
    RENDER_DATA_SUCCESS17 :'RENDER_DATA_SUCCESS17',
    ADD_NOTES17:'ADD_NOTES17',
    RENDER_NOTES17:'RENDER_NOTES17',
    FILTER_DATA_AL17:'FILTER_DATA_AL17',
    renderData17 : (area,date)=>({
        type: actions.RENDER_DATA17,
        payload:{area,date}
    }),
    renderDataSuccess17:results=>({
        type: actions.RENDER_DATA_SUCCESS17,
        results
    }),
    filterDataAl17:(param,filter) =>({
        type:actions.FILTER_DATA_AL17,
        payload:{param,filter}
    }),
};

export default actions;
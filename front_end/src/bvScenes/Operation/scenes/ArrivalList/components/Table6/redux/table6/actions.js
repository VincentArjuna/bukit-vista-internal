const actions={
    RENDER_DATA6:'RENDER_DATA6',
    RENDER_DATA_SUCCESS6 :'RENDER_DATA_SUCCESS6',
    ADD_NOTES6:'ADD_NOTES6',
    RENDER_NOTES6:'RENDER_NOTES6',
    FILTER_DATA_AL6:'FILTER_DATA_AL6',
    renderData6 : (area,date)=>({
        type: actions.RENDER_DATA6,
        payload:{area,date}
    }),
    renderDataSuccess6:results=>({
        type: actions.RENDER_DATA_SUCCESS6,
        results
    }),
    filterDataAl6:(param,filter) =>({
        type:actions.FILTER_DATA_AL6,
        payload:{param,filter}
    }),
};

export default actions;
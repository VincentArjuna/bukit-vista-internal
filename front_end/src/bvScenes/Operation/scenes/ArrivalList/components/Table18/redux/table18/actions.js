const actions={
    RENDER_DATA18:'RENDER_DATA18',
    RENDER_DATA_SUCCESS18 :'RENDER_DATA_SUCCESS18',
    ADD_NOTES18:'ADD_NOTES18',
    RENDER_NOTES18:'RENDER_NOTES18',
    FILTER_DATA_AL18:'FILTER_DATA_AL18',
    renderData18 : (area,date)=>({
        type: actions.RENDER_DATA18,
        payload:{area,date}
    }),
    renderDataSuccess18:results=>({
        type: actions.RENDER_DATA_SUCCESS18,
        results
    }),
    filterDataAl18:(param,filter) =>({
        type:actions.FILTER_DATA_AL18,
        payload:{param,filter}
    }),
};

export default actions;
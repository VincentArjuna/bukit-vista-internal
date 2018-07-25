const actions={
    RENDER_DATA19:'RENDER_DATA19',
    RENDER_DATA_SUCCESS19 :'RENDER_DATA_SUCCESS19',
    ADD_NOTES19:'ADD_NOTES19',
    RENDER_NOTES19:'RENDER_NOTES19',
    FILTER_DATA_AL19:'FILTER_DATA_AL19',
    renderData19 : (area,date)=>({
        type: actions.RENDER_DATA19,
        payload:{area,date}
    }),
    renderDataSuccess19:results=>({
        type: actions.RENDER_DATA_SUCCESS19,
        results
    }),
    filterDataAl19:(param,filter) =>({
        type:actions.FILTER_DATA_AL19,
        payload:{param,filter}
    }),
};

export default actions;
const actions={
    RENDER_DATA21:'RENDER_DATA21',
    RENDER_DATA_SUCCESS21 :'RENDER_DATA_SUCCESS21',
    ADD_NOTES21:'ADD_NOTES21',
    RENDER_NOTES21:'RENDER_NOTES21',
    FILTER_DATA_AL21:'FILTER_DATA_AL21',
    renderData21 : (area,date)=>({
        type: actions.RENDER_DATA21,
        payload:{area,date}
    }),
    renderDataSuccess21:results=>({
        type: actions.RENDER_DATA_SUCCESS21,
        results
    }),
    filterDataAl21:(param,filter) =>({
        type:actions.FILTER_DATA_AL21,
        payload:{param,filter}
    }),
};

export default actions;
const actions={
    RENDER_DATA7:'RENDER_DATA7',
    RENDER_DATA_SUCCESS7 :'RENDER_DATA_SUCCESS7',
    ADD_NOTES7:'ADD_NOTES7',
    RENDER_NOTES7:'RENDER_NOTES7',
    FILTER_DATA_AL7:'FILTER_DATA_AL7',
    renderData7 : (area,date)=>({
        type: actions.RENDER_DATA7,
        payload:{area,date}
    }),
    renderDataSuccess7:results=>({
        type: actions.RENDER_DATA_SUCCESS7,
        results
    }),
    filterDataAl7:(param,filter) =>({
        type:actions.FILTER_DATA_AL7,
        payload:{param,filter}
    }),
};

export default actions;
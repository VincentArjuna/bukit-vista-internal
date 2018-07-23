const actions={
    RENDER_DATA3:'RENDER_DATA3',
    RENDER_DATA_SUCCESS3 :'RENDER_DATA_SUCCESS3',
    ADD_NOTES3:'ADD_NOTES3',
    RENDER_NOTES3:'RENDER_NOTES3',
    FILTER_DATA_AL3:'FILTER_DATA_AL3',
    renderData3 :(area,date)=>({
        type: actions.RENDER_DATA3,
        payload:{area,date}
    }),
    renderDataSuccess3:results=>({
        type: actions.RENDER_DATA_SUCCESS3,
        results
    }),
    filterDataAl3:(param,filter) =>({
        type:actions.FILTER_DATA_AL3,
        payload:{param,filter}
    }),
};

export default actions;
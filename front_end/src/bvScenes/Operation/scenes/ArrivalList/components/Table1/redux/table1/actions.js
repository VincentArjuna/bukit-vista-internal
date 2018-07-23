const actions={
    RENDER_DATA1:'RENDER_DATA1',
    RENDER_DATA_SUCCESS1:'RENDER_DATA_SUCCESS1',
    ADD_NOTES1:'ADD_NOTES1',
    RENDER_NOTES1:'RENDER_NOTES1',
    FILTER_DATA_AL1:'FILTER_DATA_AL1',
    renderData1 : (area,date)=>({
        type: actions.RENDER_DATA1,
        payload:{area,date}
    }),
    renderDataSuccess1:(results)=>({
        type: actions.RENDER_DATA_SUCCESS1,
        results
    }),
    filterDataAl1:(param,filter) =>({
        type:actions.FILTER_DATA_AL1,
        payload:{param,filter}
    }),
};

export default actions;
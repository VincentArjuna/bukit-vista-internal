const actions={
    RENDER_DATA12:'RENDER_DATA12',
    RENDER_DATA_SUCCESS12 :'RENDER_DATA_SUCCESS12',
    ADD_NOTES12:'ADD_NOTES12',
    RENDER_NOTES12:'RENDER_NOTES12',
    FILTER_DATA_AL12:'FILTER_DATA_AL12',
    renderData12 : (area,date)=>({
        type: actions.RENDER_DATA12,
        payload:{area,date}
    }),
    renderDataSuccess12:results=>({
        type: actions.RENDER_DATA_SUCCESS12,
        results
    }),
    filterDataAl12:(param,filter) =>({
        type:actions.FILTER_DATA_AL12,
        payload:{param,filter}
    }),
};

export default actions;
const actions={
    RENDER_DATA10:'RENDER_DATA10',
    RENDER_DATA_SUCCESS10 :'RENDER_DATA_SUCCESS10',
    ADD_NOTES10:'ADD_NOTES10',
    RENDER_NOTES10:'RENDER_NOTES10',
    FILTER_DATA_AL10:'FILTER_DATA_AL10',
    renderData10 : (area,date)=>({
        type: actions.RENDER_DATA10,
        payload:{area,date}
    }),
    renderDataSuccess10:results=>({
        type: actions.RENDER_DATA_SUCCESS10,
        results
    }),
    filterDataAl10:(param,filter) =>({
        type:actions.FILTER_DATA_AL10,
        payload:{param,filter}
    }),
};

export default actions;
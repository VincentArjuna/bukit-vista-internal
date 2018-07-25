const actions={
    RENDER_DATA8:'RENDER_DATA8',
    RENDER_DATA_SUCCESS8 :'RENDER_DATA_SUCCESS8',
    ADD_NOTES8:'ADD_NOTES8',
    RENDER_NOTES8:'RENDER_NOTES8',
    FILTER_DATA_AL8:'FILTER_DATA_AL8',
    renderData8 : (area,date)=>({
        type: actions.RENDER_DATA8,
        payload:{area,date}
    }),
    renderDataSuccess8:results=>({
        type: actions.RENDER_DATA_SUCCESS8,
        results
    }),
    filterDataAl8:(param,filter) =>({
        type:actions.FILTER_DATA_AL8,
        payload:{param,filter}
    }),
};

export default actions;
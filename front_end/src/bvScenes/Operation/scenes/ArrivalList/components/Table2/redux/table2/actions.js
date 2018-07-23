const actions={
    RENDER_DATA2:'RENDER_DATA2',
    RENDER_DATA_SUCCESS2 :'RENDER_DATA_SUCCESS2',
    ADD_NOTES2:'ADD_NOTES2',
    RENDER_NOTES2:'RENDER_NOTES2',
    FILTER_DATA_AL2:'FILTER_DATA_AL2',
    renderData2 : (area,date)=>({
        type: actions.RENDER_DATA2,
        payload:{area,date}
    }),
    renderDataSuccess2:results=>({
        type: actions.RENDER_DATA_SUCCESS2,
        results
    }),
    filterDataAl2:(param,filter) =>({
        type:actions.FILTER_DATA_AL2,
        payload:{param,filter}
    }),
};

export default actions;
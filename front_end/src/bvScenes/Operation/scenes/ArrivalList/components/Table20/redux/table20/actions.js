const actions={
    RENDER_DATA20:'RENDER_DATA20',
    RENDER_DATA_SUCCESS20 :'RENDER_DATA_SUCCESS20',
    ADD_NOTES20:'ADD_NOTES20',
    RENDER_NOTES20:'RENDER_NOTES20',
    FILTER_DATA_AL20:'FILTER_DATA_AL20',
    renderData20 : (area,date)=>({
        type: actions.RENDER_DATA20,
        payload:{area,date}
    }),
    renderDataSuccess20:results=>({
        type: actions.RENDER_DATA_SUCCESS20,
        results
    }),
    filterDataAl20:(param,filter) =>({
        type:actions.FILTER_DATA_AL20,
        payload:{param,filter}
    }),
};

export default actions;
const actions={
    RENDER_DATA4:'RENDER_DATA4',
    RENDER_DATA_SUCCESS4 :'RENDER_DATA_SUCCESS4',
    ADD_NOTES4:'ADD_NOTES4',
    RENDER_NOTES4:'RENDER_NOTES4',
    FILTER_DATA_AL4:'FILTER_DATA_AL4',
    renderData4 : (area,date)=>({
        type: actions.RENDER_DATA4,
        payload:{area,date}
    }),
    renderDataSuccess4:results=>({
        type: actions.RENDER_DATA_SUCCESS4,
        results
    }),
    filterDataAl4:(param,filter) =>({
        type:actions.FILTER_DATA_AL4,
        payload:{param,filter}
    }),
};

export default actions;
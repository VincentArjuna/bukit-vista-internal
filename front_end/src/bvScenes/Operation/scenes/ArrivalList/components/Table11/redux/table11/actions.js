const actions={
    RENDER_DATA11:'RENDER_DATA11',
    RENDER_DATA_SUCCESS11 :'RENDER_DATA_SUCCESS11',
    ADD_NOTES11:'ADD_NOTES11',
    RENDER_NOTES11:'RENDER_NOTES11',
    FILTER_DATA_AL11:'FILTER_DATA_AL11',
    renderData11 : (area,date)=>({
        type: actions.RENDER_DATA11,
        payload:{area,date}
    }),
    renderDataSuccess11:results=>({
        type: actions.RENDER_DATA_SUCCESS11,
        results
    }),
    filterDataAl11:(param,filter) =>({
        type:actions.FILTER_DATA_AL11,
        payload:{param,filter}
    }),
};

export default actions;
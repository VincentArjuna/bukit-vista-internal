const actions={
    RENDER_DATA11:'RENDER_DATA11',
    RENDER_DATA_SUCCESS11:'RENDER_DATA_SUCCESS11',
    ADD_NOTES11:'ADD_NOTES11',
    RENDER_NOTES11:'RENDER_NOTES11',
    renderData11 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA11,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess11:(results)=>({
        type: actions.RENDER_DATA_SUCCESS11,
        results
    })
};

export default actions;
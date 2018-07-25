const actions={
    RENDER_DATA9:'RENDER_DATA9',
    RENDER_DATA_SUCCESS9 :'RENDER_DATA_SUCCESS9',
    ADD_NOTES9:'ADD_NOTES9',
    RENDER_NOTES9:'RENDER_NOTES9',
    FILTER_DATA_AL9:'FILTER_DATA_AL9',
    renderData9 : (area,date)=>({
        type: actions.RENDER_DATA9,
        payload:{area,date}
    }),
    renderDataSuccess9:results=>({
        type: actions.RENDER_DATA_SUCCESS9,
        results
    }),
    filterDataAl9:(param,filter) =>({
        type:actions.FILTER_DATA_AL9,
        payload:{param,filter}
    }),
};

export default actions;
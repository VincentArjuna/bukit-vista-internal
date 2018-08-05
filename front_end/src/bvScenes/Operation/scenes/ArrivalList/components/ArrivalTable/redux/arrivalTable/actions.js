const actions={
    RENDER_DATA:'RENDER_DATA',
    RENDER_DATA_SUCCESS:'RENDER_DATA_SUCCESS',
    INITIALIZE_STATE :'INITIALIZE_STATE',
    RESET_STATE:'RESET_STATE',
    CHECK_LOADED:'CHECK_LOADED',
    renderData:(index,area,date,filter_type,filterer,date_type)=>({
        type:actions.RENDER_DATA,
        payload:{index,area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess:(index,results,total)=>({
        type:actions.RENDER_DATA_SUCCESS,
        index,
        results,
        total
    }),
    initializeState:(index)=>({
        type:actions.INITIALIZE_STATE,  
        payload:{index}
    }),
    resetState:()=>({
        type:actions.RESET_STATE
    }),
    checkLoaded:()=>({
        type:actions.CHECK_LOADED
    })
};

export default actions;
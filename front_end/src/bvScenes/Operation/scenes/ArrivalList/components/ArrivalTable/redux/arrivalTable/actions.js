const actions={
    RENDER_DATA:'RENDER_DATA',
    RENDER_DATA_SUCCESS:'RENDER_DATA_SUCCESS',
    RENDER_DATA_SINGLE:'RENDER_DATA_SINGLE',
    RENDER_DATA_SINGLE_SUCCESS:'RENDER_DATA_SINGLE_SUCCESS',
    INITIALIZE_STATE :'INITIALIZE_STATE',
    RESET_STATE:'RESET_STATE',
    CHECK_LOADED:'CHECK_LOADED',
    renderData:(index,area,date,filter_type,filterer,date_type)=>({
        type:actions.RENDER_DATA,
        payload:{index,area,date,filter_type,filterer,date_type,page:1}
    }),
    renderDataSuccess:(index,results,total,page)=>({
        type:actions.RENDER_DATA_SUCCESS,
        index,
        results,
        total,
        page
    }),
    onPageChange:(index,area,date,filter_type,filterer,date_type,page)=>({
        type:actions.RENDER_DATA_SINGLE,
        payload:{index,area,date,filter_type,filterer,date_type,page}
    }),
    renderDataSingleSuccess:(index,results,page)=>({
        type:actions.RENDER_DATA_SINGLE_SUCCESS,
        index,
        results,
        page
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
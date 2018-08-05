const actions={
    RENDER_DATA1:'RENDER_DATA1',
    RENDER_DATA_SUCCESS1:'RENDER_DATA_SUCCESS1',
    ADD_NOTES1:'ADD_NOTES1',
    RENDER_NOTES1:'RENDER_NOTES1',
    TEST_FUNC:'TEST_FUNC',
    TEST_FUNC_RESULT:'TEST_FUNC_RESULT',
    renderData1 : (area,date,filter_type,filterer,date_type)=>({
        type: actions.RENDER_DATA1,
        payload:{area,date,filter_type,filterer,date_type}
    }),
    renderDataSuccess1:(results)=>({
        type: actions.RENDER_DATA_SUCCESS1,
        results
    }),
    testFunc:(index,area,date,filter_type,filterer,date_type)=>({
        type:actions.TEST_FUNC,
        payload:{index,area,date,filter_type,filterer,date_type}
    }),
    tryFuncResult:(index,results)=>({
        type:actions.TEST_FUNC_RESULT,
        index,
        results
    }),
};

export default actions;
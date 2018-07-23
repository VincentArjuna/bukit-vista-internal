
const actions={
    RENDER_DATA_BC:'RENDER_DATA_BC',
    RENDER_DATA_SUCCESS_BC :'RENDER_DATA_SUCCESS_BC',
    FILTER_DATA_BC: 'FILTER_DATA_BC',
    renderDataBc : ()=>({
        type: actions.RENDER_DATA_BC,
    }),
    renderDataSuccessBc:results=>({
        type: actions.RENDER_DATA_SUCCESS_BC,
        results
    }),
    filterDataBc:(param,filter) =>({
        type:actions.FILTER_DATA_BC,
        payload:(param,filter)
    }),
};

export default actions;

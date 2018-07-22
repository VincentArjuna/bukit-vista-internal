const actions={
    RENDER_DATA_BC:'RENDER_DATA_BC',
    RENDER_DATA_SUCCESS_BC :'RENDER_DATA_SUCCESS_BC',
    renderDataBc : area=>({
        type: actions.RENDER_DATA_BC,
        payload:{area}
    }),
    renderDataSuccessBc:results=>({
        type: actions.RENDER_DATA_SUCCESS_BC,
        results
    }),
};

export default actions;

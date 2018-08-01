
const actions={
    RENDER_DATA_BC:'RENDER_DATA_BC',
    RENDER_DATA_SUCCESS_BC :'RENDER_DATA_SUCCESS_BC',
    renderDataBc : (date,filterer,date_type,filter_type)=>({
        type: actions.RENDER_DATA_BC,
        payload:{date,filterer,date_type,filter_type,page:1}
    }),
    renderDataSuccessBc:(results,total,page)=>({
        type: actions.RENDER_DATA_SUCCESS_BC,
        results,
        total,
        page
    }),
    onPageChange:(date,filterer,date_type,filter_type,page)=>({
        type: actions.RENDER_DATA_BC,
        payload:{date,filterer,date_type,filter_type,page}
    })
};

export default actions;

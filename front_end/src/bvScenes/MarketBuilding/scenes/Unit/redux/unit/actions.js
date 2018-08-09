const actions={
    RENDER_DATA_UNIT:'RENDER_DATA_UNIT',
    RENDER_DATA_UNIT_SUCCESS:'RENDER_DATA_UNIT_SUCCESS',
    renderDataUnit : (filter_type,filterer,per_page)=>({
        type: actions.RENDER_DATA_UNIT,
        payload:{filter_type,filterer,per_page}
    }),
    renderDataUnitSuccess:results=>({
        type: actions.RENDER_DATA_UNIT_SUCCESS,
        results
    }),
}

export default actions;
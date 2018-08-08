const actions={
    RENDER_DATA_UNIT:'RENDER_DATA_UNIT',
    RENDER_DATA_UNIT_SUCCESS:'RENDER_DATA_UNIT_SUCCESS',
    renderDataUnit : (filter_type,filterer)=>({
        type: actions.RENDER_DATA_UNIT,
        payload:{filter_type,filterer}
    }),
    renderDataUnitSuccess:results=>({
        type: actions.RENDER_DATA_UNIT_SUCCESS,
        results
    }),
}

export default actions;
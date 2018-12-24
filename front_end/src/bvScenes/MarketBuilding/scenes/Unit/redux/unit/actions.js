const actions={
    RENDER_DATA_UNIT:'RENDER_DATA_UNIT',
    RENDER_DATA_UNIT_SUCCESS:'RENDER_DATA_UNIT_SUCCESS',
    ADD_UNIT:'ADD_UNIT',
    ADD_UNIT_RESPONSE:'ADD_UNIT_RESPONSE',
    EDIT_UNIT:'EDIT_UNIT',
    EDIT_UNIT_RESPONSE:'EDIT_UNIT_RESPONSE',
    renderDataUnit : (filter_type,filterer,per_page)=>({
        type: actions.RENDER_DATA_UNIT,
        payload:{filter_type,filterer,per_page,page:1}
    }),
    onPageChange: (filter_type,filterer,per_page,page)=>({
        type:actions.RENDER_DATA_UNIT,
        payload:{filter_type,filterer,per_page,page}
    }),
    renderDataUnitSuccess:(results,total,page)=>({
        type: actions.RENDER_DATA_UNIT_SUCCESS,
        results,
        total,
        page
    }),
    addUnit:(name,onboard_date,base_price,currency,capacity,number_room,swimming_pool,pOwner,pBv,property_id)=>({
        type:actions.ADD_UNIT,
        payload:{name,onboard_date,base_price,currency,capacity,number_room,swimming_pool,pOwner,pBv,property_id}
    }),
    editUnit:(name,onboard_date,base_price,currency,capacity,number_room,swimming_pool,pOwner,pBv,property_id,unit_id)=>({
        type:actions.EDIT_UNIT,
        payload:{name,onboard_date,base_price,currency,capacity,number_room,swimming_pool,pOwner,pBv,property_id,unit_id}
    }),
    addUnitResponse:(message)=>({
        type:actions.ADD_UNIT_RESPONSE,
        message
    }),
    editUnitResponse:(message)=>({
        type:actions.EDIT_UNIT_RESPONSE,
        message
    })
}

export default actions;
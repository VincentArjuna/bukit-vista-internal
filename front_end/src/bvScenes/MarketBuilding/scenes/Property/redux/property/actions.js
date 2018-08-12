const actions={
    RENDER_DATA_PROPERTY:'RENDER_DATA_PROPERTY',
    RENDER_DATA_PROPERTY_SUCCESS:'RENDER_DATA_PROPERTY_SUCCESS',
    ADD_PROPERTY:'ADD_PROPERTY',
    EDIT_PROPERTY:'EDIT_PROPERTY',
    renderDataProperty : (filter_type,filterer,per_page)=>({
        type: actions.RENDER_DATA_PROPERTY,
        payload:{filter_type,filterer,per_page,page:1}
    }),
    onPageChange: (filter_type,filterer,per_page,page)=>({
        type:actions.RENDER_DATA_PROPERTY,
        payload:{filter_type,filterer,per_page,page}
    }),
    renderDataPropertySuccess:(results,total,page)=>({
        type: actions.RENDER_DATA_PROPERTY_SUCCESS,
        results,
        total,
        page
    }),
    addProperty:(name,type,status,prop_package,design,proximity,life_support,service,owner_group_link,area_id,employee_id)=>({
        type:actions.ADD_PROPERTY,
        payload:{name,type,status,prop_package,design,proximity,life_support,service,owner_group_link,area_id,employee_id}
    }),
    editProperty:(name,type,status,prop_package,design,proximity,life_support,service,owner_group_link,area_id,employee_id,property_id)=>({
        type:actions.EDIT_PROPERTY,
        payload:{name,type,status,prop_package,design,proximity,life_support,service,owner_group_link,area_id,employee_id,property_id}
    })
}

export default actions;
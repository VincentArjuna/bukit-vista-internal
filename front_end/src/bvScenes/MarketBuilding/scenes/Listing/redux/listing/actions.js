const actions={
    RENDER_DATA_LISTING:'RENDER_DATA_LISTING',
    RENDER_DATA_LISTING_SUCCESS:'RENDER_DATA_LISTING_SUCCESS',
    ADD_LISTING:'ADD_LISTING',
    EDIT_LISTING:'EDIT_LISTING',
    ADD_LISTING_RESPONSE:'ADD_LISTING_RESPONSE',
    EDIT_LISTING_RESPONSE:'EDIT_LISTING_RESPONSE',
    renderDataListing : (filter_type,filterer,per_page)=>({
        type: actions.RENDER_DATA_LISTING,
        payload:{filter_type,filterer,per_page,page:1}
    }),
    onPageChange: (filter_type,filterer,per_page,page)=>({
        type:actions.RENDER_DATA_LISTING,
        payload:{filter_type,filterer,per_page,page}
    }),
    renderDataListingSuccess:(results,total,page)=>({
        type: actions.RENDER_DATA_LISTING_SUCCESS,
        results,
        total,
        page
    }),
    addListing:(id,name,date,status,instant_book,accO,accB,remark,unit,profile,employee)=>({
        type:actions.ADD_LISTING,
        payload:{id,name,date,status,instant_book,accO,accB,remark,unit,profile,employee}
    }),
    editListing:(id,name,date,status,instant_book,accO,accB,remark,unit,profile,employee)=>({
        type:actions.EDIT_LISTING,
        payload:{id,name,date,status,instant_book,accO,accB,remark,unit,profile,employee}
    }),
    addListingResponse:(message)=>({
        type:actions.ADD_LISTING_RESPONSE,
        message
    }),
    editListingResponse:(message)=>({
        type:actions.EDIT_LISTING_RESPONSE,
        message
    }),
}

export default actions;
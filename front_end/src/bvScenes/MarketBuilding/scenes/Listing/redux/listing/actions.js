const actions={
    RENDER_DATA_LISTING:'RENDER_DATA_LISTING',
    RENDER_DATA_LISTING_SUCCESS:'RENDER_DATA_LISTING_SUCCESS',
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
}

export default actions;
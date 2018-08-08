const actions={
    RENDER_DATA_LISTING:'RENDER_DATA_LISTING',
    RENDER_DATA_LISTING_SUCCESS:'RENDER_DATA_LISTING_SUCCESS',
    renderDataListing : (filter_type,filterer)=>({
        type: actions.RENDER_DATA_LISTING,
        payload:{filter_type,filterer}
    }),
    renderDataListingSuccess:results=>({
        type: actions.RENDER_DATA_LISTING_SUCCESS,
        results
    }),
}

export default actions;
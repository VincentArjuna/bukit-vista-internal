const actions={
    RENDER_DATA_LISTING:'RENDER_DATA_LISTING',
    RENDER_DATA_LISTING_SUCCESS:'RENDER_DATA_LISTING_SUCCESS',
    renderDataListing : ()=>({
        type: actions.RENDER_DATA_LISTING
    }),
    renderDataListingSuccess:results=>({
        type: actions.RENDER_DATA_LISTING_SUCCESS,
        results
    }),
}

export default actions;
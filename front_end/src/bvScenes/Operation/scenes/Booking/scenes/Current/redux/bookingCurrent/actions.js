
const actions={
    RENDER_DATA_BC:'RENDER_DATA_BC',
    RENDER_DATA_SUCCESS_BC :'RENDER_DATA_SUCCESS_BC',
    ADD_BOOKING:'ADD_BOOKING',
    ADD_BOOKING_RESPONSE:'ADD_BOOKING_RESPONSE',
    DOWNLOAD_CSV:'DOWNLOAD_CSV',
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
    }),
    addBooking:(check_in,check_out,comm,currency,earned,eta,name,number,phone,booking_id,listing_id,source,conversation)=>({
        type:actions.ADD_BOOKING,
        payload:{check_in,check_out,comm,currency,earned,eta,name,number,phone,booking_id,listing_id,source,conversation}
    }),
    addBookingResponse:(response)=>({
        type:actions.ADD_BOOKING_RESPONSE,
        response
    }),
    downloadCsv:(date)=>({
        type:actions.DOWNLOAD_CSV,
        payload:{date}
    })
};

export default actions;

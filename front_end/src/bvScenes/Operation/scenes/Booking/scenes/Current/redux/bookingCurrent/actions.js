
const actions={
    RENDER_DATA_BC:'RENDER_DATA_BC',
    RENDER_DATA_SUCCESS_BC :'RENDER_DATA_SUCCESS_BC',
    RENDER_DATA_MONTHLY_BC:'RENDER_DATA_MONTHLY_BC',
    RENDER_DATA_MONTHLY_SUCCESS_BC:'RENDER_DATA_MONTHLY_SUCCESS_BC',
    ADD_BOOKING:'ADD_BOOKING',
    ADD_BOOKING_RESPONSE:'ADD_BOOKING_RESPONSE',
    DOWNLOAD_CSV:'DOWNLOAD_CSV',
    DOWNLOAD_CSV_MONTHLY:'DOWNLOAD_CSV_MONTHLY',
    UPDATE_ARRIVAL_LIST:'UPDATE_ARRIVAL_LIST',
    EDIT_BOOKING: 'EDIT_BOOKING',
    EDIT_BOOKING_ALL:'EDIT_BOOKING_ALL',
    EDIT_BOOKING_RESPONSE:'EDIT_BOOKING_RESPONSE',
    editBooking :(booking_id,booking_check_out,booking_guest_eta,booking_guest_status,booking_guest_phone,booking_comm_channel,booking_notes)=>({
        type:actions.EDIT_BOOKING,
        payload:{updateType:1,booking_id,booking_check_out,booking_guest_eta,booking_guest_status,booking_guest_phone,booking_comm_channel,booking_notes}
    }),
    editAllBooking :(booking_id,booking_status,name,check_in,check_out,number,phone,eta,comm,earned,currency,source,conversation,listing)=>({
        type:actions.EDIT_BOOKING_ALL,
        payload:{updateType:0,booking_id,booking_status,name,check_in,check_out,number,phone,eta,comm,earned,currency,source,conversation,listing}
    }),
    updateData:()=>({
        type:actions.UPDATE_ARRIVAL_LIST,
    }),
    editBookingResponse:(response)=>({
        type:actions.EDIT_BOOKING_RESPONSE,
        response
    }),
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
    }),
    renderDataMonthlyBc:(date,propertyId)=>({
        type:actions.RENDER_DATA_MONTHLY_BC,
        payload:{date,propertyId,page:1}
    }),
    renderDataMonthlySuccessBc:(results,total,page)=>({
        type: actions.RENDER_DATA_MONTHLY_SUCCESS_BC,
        results,
        total,
        page
    }),
    downloadCsvMonthly:(date,propertyId)=>({
        type:actions.DOWNLOAD_CSV_MONTHLY,
        payload:{date,propertyId}
    })
};

export default actions;

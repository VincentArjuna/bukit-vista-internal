const actions={
    GET_DATE:'GET_DATE',
    GET_FILTER_TYPE:'GET_FILTER_TYPE',
    GET_FILTER_VALUE:'GET_FILTER_VALUE',
    getDate: ()=>({
        type: actions.GET_DATE
    }),
    getFilterType: ()=>({
        type: actions.GET_FILTER_TYPE
    }),
    getFilterValue: ()=>({
        type: actions.GET_FILTER_VALUE
    }),
}
import actions from './actions';

const initState={
    tableData:{},
    checkCount:0,
    totalData:0,
    singleRender:false,
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.INITIALIZE_STATE:
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.payload.index]:{
                    }
                }
            };
        case actions.RESET_STATE:
            return{
                tableData:{}
            };
        case actions.RENDER_DATA:
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.payload.index]:{
                        area:action.payload.area,
                        date:action.payload.date,
                        filter_type:action.payload.filter_type,
                        filterer:action.payload.filterer,
                        date_type:action.payload.date_type,
                        loading:true,
                        results:[]
                    }
                }
            };
        case actions.RENDER_DATA_SUCCESS:
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.index]:{
                        ...state.tableData[action.index],
                        results:action.results,
                        loading:false,
                        total:action.total
                    }
                },
                checkCount:state.checkCount+1,
                totalData:state.totalData+action.total
            };
        default:
            return state;
    }
}
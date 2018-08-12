import actions from './actions';

const initState={
    tableData:{},
    checkCount:0,
    totalData:0,
    singleRender:false,
    filledTables:[]
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.INITIALIZE_STATE:
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.payload.index]:{
                        results:[],
                        loading:false,
                        isFilled:false,
                    }
                },
                //checkCount:state.checkCount+1,
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
                        page:action.payload.page,
                        sort:action.payload.sort,
                        results:[]
                    }
                },
                totalData:0,
                filledTables:[]
            };
        case actions.RENDER_DATA_SUCCESS:
            if(action.total>0){
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.index]:{
                        ...state.tableData[action.index],
                        results:action.results,
                        loading:false,
                        isFilled:true,
                        total:action.total,
                        page:action.page,
                        sort:action.sort
                    }
                },
                totalData:state.totalData+action.total,
                filledTables:[...state.filledTables,action.index],
                checkCount:state.checkCount+1,
            };
        }else{
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.index]:{
                        ...state.tableData[action.index],
                        results:action.results,
                        loading:false,
                        total:action.total,
                        page:action.page
                    }
                },
                totalData:state.totalData+action.total,
                checkCount:state.checkCount+1,
            };
        }
        case actions.RENDER_DATA_SINGLE:
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.index]:{
                        ...state.tableData[action.index],
                        loading:true,
                    }
                }
            };
        case actions.RENDER_DATA_SINGLE_SUCCESS:
            return{
                ...state,
                tableData:{
                    ...state.tableData,
                    [action.index]:{
                        ...state.tableData[action.index],
                        loading:false,
                        results:action.results,
                        page:action.page,
                        sort:action.sort
                    }
                }
            }
        default:
            return state;
    }
}
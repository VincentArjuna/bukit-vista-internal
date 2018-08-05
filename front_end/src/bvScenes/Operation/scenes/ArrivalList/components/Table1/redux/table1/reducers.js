import actions from './actions';

const initState={
    tableData:{
        0:{
            results:[],
            area:null,
            title:null,
            loading:false,
        },
        1:{
            results:[],
            area:null,
            title:null,
            loading:false, 
        }
    }
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.TEST_FUNC:
            //console.log(state);
            return{
                tableData:{
                    ...state.tableData,
                    [action.payload.index]:{
                        area:action.payload.area,
                        date:action.payload.date,
                        filter_type:action.payload.filter_type,
                        filterer:action.payload.filterer,
                        date_type:action.payload.date_type,
                        loading:true,
                    }
                }
            };
        case actions.TEST_FUNC_RESULT:
            return{
                tableData:{
                    ...state.tableData,
                    [action.index]:{
                        ...state.tableData[action.index],
                        results:action.results,
                        loading:false
                    }
                }
            };
        case actions.RENDER_DATA1:
            return{
                ...state,
                area:action.payload.area,
                date:action.payload.date,
                filter_type:action.payload.filter_type,
                filterer:action.payload.filterer,
                date_type:action.payload.date_type,
                loading:true,
            };
        case actions.RENDER_DATA_SUCCESS1:
            
            return{
                ...state,
                results:action.results,
                loading:false,
            };
        default:
            return state;
    }
}
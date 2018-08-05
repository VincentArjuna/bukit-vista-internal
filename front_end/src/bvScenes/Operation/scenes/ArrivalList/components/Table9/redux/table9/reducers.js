import actions from './actions';

const initState={
    results:[],
    area:null,
    title:null,
    loading:false
}

export default function tableReducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA9:
            return{
                ...state,
                area:action.payload.area,
                date:action.payload.date,
                filter_type:action.payload.filter_type,
                filterer:action.payload.filterer,
                date_type:action.payload.date_type,
                loading:true,
            };
        case actions.RENDER_DATA_SUCCESS9:
             
            return{
                ...state,
                results:action.results,
                loading:false
            };
        default:
            return state;
    }
}
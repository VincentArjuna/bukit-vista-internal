import actions from './actions';

const initState={
    results:[],
    total:0,
    page:1,
    totalPage:0,
    totalData:[],
    rendered:false
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_PROFILE:
            return{
                ...state,
            };
        case actions.RENDER_DATA_PROFILE_SUCCESS:
            return{
                ...state,
                results:action.results,
                total:action.total,
                page:action.page
            };
        case actions.ADD_PROFILE:
            return{
                ...state,
            };
        case actions.EDIT_PROFILE:
            return{
                ...state,
            };
        case actions.PAGE_COUNT:
            
            return{
                ...state,
                totalData:[],
                rendered:false
            };
        case actions.PAGE_COUNT_SUCCESS:
            return{
                ...state,
                totalData:state.totalData.concat(action.totalData),
            }
        case actions.DATA_PROFILE_RENDERED:
            return{
                ...state,
                rendered:true
            }
        default:
            return state;
    }
}
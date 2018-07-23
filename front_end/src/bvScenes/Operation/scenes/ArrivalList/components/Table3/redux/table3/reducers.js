import actions from './actions';

const initState={
    results:[],
    area:null,
    title:null
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA3:
            return{
                ...state,
                area:action.payload.area,
                date:action.payload.date
            };
        case actions.RENDER_DATA_SUCCESS3:
            return{
                ...state,
                results:action.results
            };
        case actions.FILTER_DATA_AL3:
            return{
                ...state,
                param:action.payload.param,
            };
        default:
            return state;
    }
}
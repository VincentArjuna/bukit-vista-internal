import actions from './actions';

const initState={
    result:[],
    area:null,
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_AREA:
            return{
                ...state,
                area:action.payload.area
            };
        case actions.LOAD_AREA:
            return{
                ...state,
                result:action.result
            };
        default:
            return state;
    }
}
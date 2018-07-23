import actions from './actions';

const initState={
    results:[],
    area:null,
    title:null
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA2:
            return{
                ...state,
                area:action.payload.area
            };
        case actions.RENDER_DATA_SUCCESS2:
            console.log(action.results);
            return{
                ...state,
                results:action.results
            };
        default:
            return state;
    }
}
import actions from './actions';

const initState = {
  results:[],
  loading:false,
  notificationLoading:false,
  notificationSuccess:false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.RENDER_NOTES:
      return{
        ...state,
        loading:true
      };
    case actions.RENDER_NOTES_SUCCESS:
      return{
        results:action.results,
        loading:false
      };
    default:
      return state;
  }
}

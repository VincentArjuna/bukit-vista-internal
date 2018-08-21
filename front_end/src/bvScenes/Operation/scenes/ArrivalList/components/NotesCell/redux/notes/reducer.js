import actions from './actions';

const initState = {
  results:[],
  loading:false,
  notificationLoading:false,
  notificationSuccess:false,
  notificationFail:false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.RENDER_NOTES:
      return{
        ...state,
        loading:true,
        notificationLoading:false,
        notificationSuccess:false,
        notificationFail:false
      };
    case actions.RENDER_NOTES_SUCCESS:
      return{
        ...state,
        results:action.results,
        loading:false,
      };
    case actions.ADD_NOTES:
      return{
        ...state,
        notificationLoading:true,
        notificationSuccess:false,
        notificationFail:false,
      };
    case actions.ADD_NOTES_SUCCESS:
      return{
        ...state,
        notificationLoading:false,
        notificationSuccess:true
      };
    case actions.ADD_NOTES_FAIL:
      return{
        ...state,
        notificationLoading:false,
        notificationFail:true
      }
    default:
      return state;
  }
}

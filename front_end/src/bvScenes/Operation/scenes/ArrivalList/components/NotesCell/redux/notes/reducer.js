import actions from './actions';

const initState = {
  results:[],
  loading:false,
  notificationLoading:false,
  notificationSuccess:false,
  notificationFail:false,
  message:""
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.RENDER_NOTES:
      return{
        ...state,
        loading:true,
        notificationLoading:false,
        notificationSuccess:false,
        notificationFail:false,
        message:""
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
        notificationSuccess:true,
        message:"Note successfully added"
      };
    case actions.ADD_NOTES_FAIL:
      return{
        ...state,
        notificationLoading:false,
        notificationFail:true,
        message:"Failed to add note"
      };
    case actions.DELETE_NOTES:
      return{
        ...state,
        notificationLoading:true,
        notificationSuccess:false,
        notificationFail:false,
      };
    case actions.DELETE_NOTES_SUCCESS:
      return{
        ...state,
        notificationLoading:false,
        notificationSuccess:true,
        message:"Note successfully deleted"
      };
    case actions.DELETE_NOTES_FAIL:
      return{
        ...state,
        notificationLoading:false,
        notificationFail:true,
        message:"Failed to delete note"
      };
      case actions.EDIT_NOTES:
      return{
        ...state,
        notificationLoading:true,
        notificationSuccess:false,
        notificationFail:false,
      };
    case actions.EDIT_NOTES_SUCCESS:
      return{
        ...state,
        notificationLoading:false,
        notificationSuccess:true,
        message:"Note successfully edited"
      };
    case actions.EDIT_NOTES_FAIL:
      return{
        ...state,
        notificationLoading:false,
        notificationFail:true,
        message:"Failed to edit note"
      };
    default:
      return state;
  }
}

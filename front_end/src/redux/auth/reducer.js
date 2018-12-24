import actions from "./actions";

const initState = { idToken: null,profile:null,loggedOut:false};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      console.log("on login success reducer : "+action.token);
      return {
        idToken: action.token,
        profile:action.profile,
        loggedOut:false
      };
    case actions.LOGOUT:
      return {
        idToken:null,
        profile:null,
        loggedOut:true
      };
    case actions.LOGIN_ERROR:
      return{
        idToken:null,
        profile:null
      };
    default:
      return state;
  }
}

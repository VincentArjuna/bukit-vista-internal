import actions from "./actions";

const initState = { idToken: null,profile:null};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      console.log("on login success reducer : "+action.token);
      return {
        idToken: action.token,
        profile:action.profile
      };
    case actions.LOGOUT:
      return {
        idToken:null,
        profile:null
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

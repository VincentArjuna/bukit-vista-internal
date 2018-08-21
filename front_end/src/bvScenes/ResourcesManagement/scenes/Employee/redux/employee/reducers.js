import actions from './actions';

const initState={
    results:[],
    hostResponse:"",
    driverResponse:"",
    verifierResponse:""
}

export default function reducer(state = initState,action){
    switch(action.type){
        case actions.RENDER_DATA_EMPLOYEE:
            return{
                ...state,
            };
        case actions.RENDER_DATA_EMPLOYEE_SUCCESS:
            return{
                ...state,
                results:action.results
            };
        case actions.EDIT_BOOKING_EMPLOYEE:
            return{
                ...state,
                booking_id:action.payload.booking_id,
                employee_id:action.payload.employee_id,
                be_role:action.payload.be_role
            };
        case actions.EDIT_BOOKING_EMPLOYEE_RESPONSE:
            if(action.employeeType==="host"){
                return{
                    ...state,
                    hostResponse:action.response
                };
            }else
            if(action.employeeType==="verifier"){
                return{
                    ...state,
                    verifierResponse:action.response
                };
            }else
            if(action.employeeType==="driver"){
                return{
                    ...state,
                    driverResponse:action.response
                };
            }
        default:
            return state;
    }
}
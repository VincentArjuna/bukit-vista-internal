import actions from './actions';

const initState={
    results:[],
    total:0,
    page:1,
    hostResponse:"",
    driverResponse:"",
    verifierResponse:"",
    totalPage:0,
    totalData:[],
    rendered:false
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
                results:action.results,
                total:action.total,
                page:action.page
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
        case actions.ADD_EMPLOYEE:
            return{
                ...state,
            }
        case actions.EDIT_EMPLOYEE:
            return{
                ...state,
            };
        case actions.PAGE_COUNT_EMPLOYEE:
            
            return{
                ...state,
                totalData:[],
                rendered:false
            };
        case actions.PAGE_COUNT_EMPLOYEE_SUCCESS:
            console.log("employee :");
            console.log(action.totalData);
            return{
                ...state,
                totalData:state.totalData.concat(action.totalData),
            }
        case actions.DATA_EMPLOYEE_RENDERED:
            return{
                ...state,
                rendered:true
            }
        default:
            return state;
    }
}
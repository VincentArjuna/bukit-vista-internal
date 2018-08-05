import moment from 'moment';
const initState={
    date:moment().format('YYYY-MM-DD').toString(),
    dateType:0,
    mode:null
}

export default function reducer(state=initState){
    return state;
}
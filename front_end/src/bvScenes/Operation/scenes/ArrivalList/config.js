import {
  LinkCell,
  TextCell
} from '../../../../bvComponents/Table/helper/helperCells';


const renderCell = (object, type, key,choice) => {
  let value;
  let colorOption="black";
  if(key==='host.employee_name'){
    value=object['host']['employee_name'];
  }else{
    value=object[key];
  }
  if(choice !== null){
    value= choice[value];
  }
  if(object['booking_guest_status']===1){
    colorOption="#f9c300";
  }else if(object['booking_guest_status']===2){
    colorOption="blue";
  }
  else if(object['booking_guest_status']===3){
    colorOption="green";
  }
  if(object['booking_status']===4){
    colorOption="red"
  }
  
  if(object)
  //kuning -checkin
  //biru - checkin, not meeting host
  //hijau - checkin, late
  switch (type) {
    case 'LinkCell':
      return LinkCell(value);
    case 'TextCell':
      return TextCell(value,colorOption);
    default:
      return TextCell(value,colorOption);
  }

};

const columns = [
  {
    title: 'Unit Name',
    key: 'unit_name',
    width: '50',
    sorter:true,
    render: object => renderCell(object, 'TextCell', 'unit_name',null)
  },
  {
    title: 'Guest Name',
    key: 'booking_guest_name',
    width: '50',
    sorter:true,
    render: object => renderCell(object, 'TextCell', 'booking_guest_name',null)
  },
  {
    title: 'Check In',
    key: 'booking_check_in',
    width: '20',
    render: object => renderCell(object, 'TextCell', 'booking_check_in',null)
  },
  {
    title: 'Check Out',
    key: 'booking_check_out',
    width: '20',
    render: object => renderCell(object, 'TextCell', 'booking_check_out',null)
  },
  {
    title: 'Profile',
    key: 'profile_name',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'profile_name',null)
  },
  {
    title: 'ETA',
    key: 'booking_guest_eta',
    width: '20',
    sorter:true,
    render: object => renderCell(object, 'TextCell', 'booking_guest_eta',null)
  },
  {
    title: 'Host',
    key: 'host.employee_name',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'host.employee_name',null)
  },
  {
    title: 'Communication Channel',
    key: 'booking_comm_channel',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_comm_channel',choices[1])
  },
  {
    title: 'Status',
    key: 'booking_guest_status',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_guest_status',choices[0])
  },
];
const choices=[
  {
    '0':'Not Checked In',
    '1':'Checked In',
    '2':'Checked In, Not Meeting Host',
    '3':'Leave Notes'
  },
  {
    '1':'Whatsapp',
    '2':'Airbnb Message',
    '3':'WeChat',
    '4':'Booking.com',
    '5':'Agoda'
  }
];
const areas = [
  { 
    key:0,
    name:'Yogyakarta',
    code:'A0001'
  },
  { key:1,
    name:'Uluwatu',
    code:'A0002'
  },
  { 
    key:2,
    name:'Canggu',
    code:'A0003'
  },
  { 
    key:3,
    name:'Ubud',
    code:'A0004'
  },
  { 
    key:4,
    name:'Jakarta',
    code:'A0005'
  },
  {
    key:5,
    name:'Bandung',
    code:'A0006'
  },
  {
    key:6,
    name:'Phuket',
    code:'A0007'
  },
  { 
    key:7,
    name:'Bingin',
    code:'A0008'
  },
  { 
    key:8,
    name:'Balangan',
    code:'A0009'
  },
  { 
    key:9,
    name:'Jimbaran',
    code:'A0010'
  },
  { 
    key:10,
    name:'Ungasan',
    code:'A0011'
  },
  {
    key:11,
    name:'Nusa Dua',
    code:'A0012'
  },
  {
    key:12,
    name:'Padang Padang',
    code:'A0013'
  },
  {
    key:13,
    name:'Gili Trawangan',
    code:'A0014'
  },
  {
    key:14,
    name:'Seminyak',
    code:'A0015'
  },
  {
    key:15,
    name:'Kuta',
    code:'A0016'
  },
  {
    key:16,
    name:'Singapore',
    code:'A0017'
  },
  {
    key:17,
    name:'Cemangi',
    code:'A0018'
  },
  {
    key:18,
    name:'Penang',
    code:'A0019'
  },
  {
    key:19,
    name:'Nusa Penida',
    code:'A0020'
  },
  {
    key:20,
    name:'Gili Air',
    code:'A0021'
  }
];
const filterTypes=[
  {
    key:'0',
    name:'Default'
  },
  {
    key:'1',
    name:'Guest name'
  },
  {
    key:'2',
    name:'Unit Name'
  },
  {
    key:'3',
    name:'Profile'
  }
];

const title = "Arrival List";
const mode="arrivalList";
export { columns,title,areas,filterTypes,mode};

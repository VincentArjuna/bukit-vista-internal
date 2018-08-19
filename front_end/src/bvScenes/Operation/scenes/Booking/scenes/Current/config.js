import {
  LinkCell,
  TextCell,
  CopyCell
} from '../../../../../../bvComponents/Table/helper/helperCells';

const renderCell = (object, type, key,choice) => {
    let value = object[key];
    if(choice !== null){
        value= choice[value];
    }
    switch (type) {
      case 'LinkCell':
        return LinkCell(value);
      case 'TextCell':
        return TextCell(value);
      case 'CopyCell':
        let desc="Copy";
        if(value==null){
            desc="No URL";
        }
        return CopyCell(value,desc);
      default:
        return TextCell(value);
    }
  };
  const columns=[
    {
        title:'Received Timestamp',
        key:'booking_received_timestamp',
        render: object => renderCell(object, 'TextCell', 'booking_received_timestamp',null)
    },
    {
        title:'Guest Name',
        key:'booking_guest_name',
        render: object => renderCell(object, 'TextCell', 'booking_guest_name',null)
    },
    {
        title:'Unit Name',
        key:'unit_name',
        render: object => renderCell(object, 'TextCell', 'unit_name',null)
    },
    {
        title:'Check In',
        key:'booking_check_in',
        render: object => renderCell(object, 'TextCell', 'booking_check_in',null)
    },
    {
        title:'Check Out',
        key:'booking_check_out',
        render: object => renderCell(object, 'TextCell', 'booking_check_out',null)
    },
    {
        title:'Profile',
        key:'profile_name',
        render: object => renderCell(object, 'TextCell', 'profile_name',null)
    },
    {
        title:'Conversation URL',
        key:'booking_conversation_url',
        render: object => renderCell(object, 'CopyCell', 'booking_conversation_url',null)
    }
];
const filterTypes=[
    {
        key:'0',
        name:'Default'
    },
    {
      key:'1',
      name:'Booking Code'
    },
    {
      key:'2',
      name:'Guest Name'
    },
    {
      key:'3',
      name:'Listing Name'
    },
    {
        key:'4',
        name:'Profile'
    }
  ];
const choices=[
    {
        '1':'IDR',
        '2':'USD',
        '3':'EUR'
    },
];
const title= "Booking / Current";
const mode="bookingCurrent";
export {columns,title,filterTypes,mode};

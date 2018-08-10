import {
  LinkCell,
  TextCell
} from '../../../../../../bvComponents/Table/helper/helperCells';

const renderCell = (object, type, key) => {
    const value = object[key];
    switch (type) {
      case 'LinkCell':
        return LinkCell(value);
      case 'TextCell':
        return TextCell(value);
      default:
        return TextCell(value);
    }
  };
  const columns=[
    {
        title:'ID',
        key:'booking_id',
        render: object => renderCell(object, 'TextCell', 'booking_id')
    },
    {
        title:'Guest Name',
        key:'booking_guest_name',
        render: object => renderCell(object, 'TextCell', 'booking_guest_name')
    },
    {
        title:'Check In',
        key:'booking_check_in',
        render: object => renderCell(object, 'TextCell', 'booking_check_in')
    },
    {
        title:'Check Out',
        key:'booking_check_out',
        render: object => renderCell(object, 'TextCell', 'booking_check_out')
    },
    {
        title:'Earned',
        key:'booking_earned',
        render: object => renderCell(object, 'TextCell', 'booking_earned')
    },
    {
        title:'Currency',
        key:'booking_currency',
        render: object => renderCell(object, 'TextCell', 'booking_currency')
    },
    {
        title:'Conversation URL',
        key:'booking_conversation_url',
        render: object => renderCell(object, 'TextCell', 'booking_conversation_url')
    },
    {
        title:'Received Timestamp',
        key:'booking_received_timestamp',
        render: object => renderCell(object, 'TextCell', 'booking_received_timestamp')
    },
    {
        title:'Listing ID',
        key:'listing_id',
        render: object => renderCell(object, 'TextCell', 'listing_id')
    },
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
const title= "Booking / Current";
const mode="bookingCurrent";
export {columns,title,filterTypes,mode};

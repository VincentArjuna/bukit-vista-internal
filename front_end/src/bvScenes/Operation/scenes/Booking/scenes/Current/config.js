import React from 'react';
import clone from 'clone';
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
        title:'Status',
        key:'booking_status',
        render: object => renderCell(object, 'TextCell', 'booking_status')
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
        title:'Guest Number',
        key:'booking_guest_number',
        render: object => renderCell(object, 'TextCell', 'booking_guest_number')
    },
    {
        title:'Guest Phone',
        key:'booking_guest_phone',
        render: object => renderCell(object, 'TextCell', 'booking_guest_phone')
    },
    {
        title:'Communication Channel',
        key:'booking_comm_channel',
        render: object => renderCell(object, 'TextCell', 'booking_comm_channel')
    },
    {
        title:'Notes',
        key:'booking_notes',
        render: object => renderCell(object, 'TextCell', 'booking_notes')
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
        title:'Source',
        key:'booking_source',
        render: object => renderCell(object, 'TextCell', 'booking_source')
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
export {columns,title,filterTypes};

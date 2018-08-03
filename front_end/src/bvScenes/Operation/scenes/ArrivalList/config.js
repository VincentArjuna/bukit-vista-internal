import React from 'react';
import clone from 'clone';
import {
  LinkCell,
  TextCell
} from '../../../../bvComponents/Table/helper/helperCells';


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

const columns = [
  {
    title: 'Unit Name',
    key: 'unit_name',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'unit_name')
  },
  {
    title: 'Guest Name',
    key: 'booking_guest_name',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_guest_name')
  },
  {
    title: 'Check In',
    key: 'booking_check_in',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_check_in')
  },
  {
    title: 'Check Out',
    key: 'booking_check_out',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_check_out')
  },
  {
    title: 'ETA',
    key: 'booking_eta',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_eta')
  },
  {
    title: 'Host',
    key: 'booking_host',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_host')
  },
  {
    title: 'Status',
    key: 'booking_guest_status',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_guest_status')
  },
];
const areas = [
  { name:'Yogyakarta',
    code:'A0001'
  },
  { name:'Uluwatu',
    code:'A0002'
  },
  { name:'Canggu',
    code:'A0003'
  },
  { name:'Ubud',
    code:'A0004'
  },
  { name:'Jakarta',
    code:'A0005'
  },
  { name:'Bandung',
    code:'A0006'
  },
  { name:'Phuket',
    code:'A0007'
  },
  { name:'Bingin',
    code:'A0008'
  },
  { name:'Balangan',
    code:'A0009'
  },
  { name:'Jimbaran',
    code:'A0010'
  },
  { name:'Ungasan',
    code:'A0011'
  },
  {
    name:'Nusa Dua',
    code:'A0012'
  },
  {
    name:'Padang Padang',
    code:'A0013'
  },
  {
    name:'Gili Trawangan',
    code:'A0014'
  },
  {
    name:'Seminyak',
    code:'A0015'
  },
  {
    name:'Kuta',
    code:'A0016'
  },
  {
    name:'Singapore',
    code:'A0017'
  },
  {
    name:'Cemangi',
    code:'A0018'
  },
  {
    name:'Penang',
    code:'A0019'
  },
  {
    name:'Nusa Penida',
    code:'A0020'
  },
  {
    name:'Gili Air',
    code:'A0021'
  }
];
const filterTypes=[
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
export { columns,title,areas,filterTypes };

import React from 'react';
import clone from 'clone';

import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from '../../../../bvComponents/Tables/helper/helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
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
    title: 'ETA',
    key: 'booking_guest_name',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_guest_name')
  },
  {
    title: 'Check In',
    key: 'booking_check_in',
    width: '50',
    render: object => renderCell(object, 'DateCell', 'booking_check_in')
  },
  {
    title: 'Check Out',
    key: 'booking_check_out',
    width: '50',
    render: object => renderCell(object, 'DateCell', 'booking_check_out')
  },
  {
    title: 'LOS',
    key: 'booking_los',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_los')
  },
  {
    title: 'Driver',
    key: 'booking_driver',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_driver')
  },
  {
    title: 'Host',
    key: 'booking_host',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_host')
  },
  {
    title: 'Status',
    key: 'booking_status',
    width: '50',
    render: object => renderCell(object, 'TextCell', 'booking_status')
  },
];

const areas = ['Yogyakarta',
'Uluwatu',
'Canggu',
'Ubud',
'Jakarta',
'Bandung',
'Phuket',
'Bingin',
'Balangan',
'Jimbaran',
'Ungasan',
'Nusa Dua',
'Padang Padang',
'Gili Trawangan',
'Seminyak',
'Kuta',
'Singapore',
'Cemangi',
'Penang',
'Nusa Penida',
'Gili Air'
];

const tableinfos = [
  {
    value: 'editView',
    columns: clone(columns),
    areas: clone(areas)
  }
];
const title = "Arrival List";
export { columns, tableinfos,areas,title };

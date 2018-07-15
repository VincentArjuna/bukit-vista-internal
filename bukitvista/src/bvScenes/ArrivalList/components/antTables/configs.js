import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../../bvComponents/helper/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from '../../../../bvComponents/helper/table/helperCells';

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
    width: 100,
    render: object => renderCell(object, 'TextCell', 'unit_name')
  },
  {
    title: 'ETA',
    key: 'booking_guest_eta',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'booking_guest_eta')
  },
  {
    title: 'Guest Name',
    key: 'booking_guest_name',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_guest_name')
  },
  {
    title: 'Check In',
    key: 'booking_check_in',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'booking_check_in')
  },
  {
    title: 'Check Out',
    key: 'booking_check_out',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'booking_check_out')
  },
  {
    title: 'LOS',
    key: 'booking_los',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_los')
  },
  {
    title: 'Driver',
    key: 'booking_driver',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_driver')
  },
  {
    title: 'Remarks',
    key: 'booking_notes',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_notes')
  },
  {
    title: 'Host',
    key: 'booking_host',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_host')
  },
  {
    title: 'Status',
    key: 'booking_status',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_status')
  }
];
const editColumns = [
  columns[0],
  columns[1],
  columns[2],
  columns[3],
  columns[4],
  columns[5],
  columns[6],
  columns[7],
  columns[8],
  columns[9]
];
const tableinfos = [
  {
    title: 'Canggu',
    value: 'editView',
    columns: clone(editColumns)
  }
];
export { columns, tableinfos };

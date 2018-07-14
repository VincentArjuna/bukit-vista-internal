import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from '../../../components/tables/helperCells';

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
    width: '200',
    className: 'isoImageCell',
    render: object => renderCell(object, 'TextCell', 'unit_name')
  },
  {
    title: 'ETA',
    key: 'booking_guest_eta',
    width: 50,
    render: object => renderCell(object, 'TextCell', 'booking_guest_eta')
  },
  {
    title: 'Guest Name',
    key: 'booking_guest_name',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_guest_name')
  },
  {
    title:'Check In',
    key: 'booking_check_in',
    width: 100,
    render: object => renderCell(object, 'DateCell', 'booking_check_in')
  },
  {
    title: 'Check Out',
    key: 'booking_check_out',
    width: 100,
    render: object => renderCell(object, 'DateCell', 'booking_check_out')
  },
  {
    title: 'LOS',
    key: 'booking_los',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'booking_los')
  },
  {
    title: 'Driver',
    key: 'booking_employee_driver',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'booking_employee_driver')
  },
  {
    title: 'Host',
    key: 'booking_employee_host',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'booking_employee_host')
  },
  {
    title: 'Status',
    key: 'booking_condition',
    width: 200,
    render: object => renderCell(object, 'TextCell', '')
  }
];

const editColumns = [
  columns
];
const tableinfos = [
  {
    title: 'Editable View',
    value: 'editView',
    columns: clone(editColumns)
  },

];
export { columns, tableinfos };

import React from 'react';
import clone from 'clone';
import {
  LinkCell,
  TextCell
} from '../../../../bvComponents/Table/helper/helperCells';
import EditCell from './components/editCell';
import NotesCell from './components/notesCell';


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
    title: 'ETA',
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

const createColumns=(columns)=> {
    const editColumn={
      title:'Edit',
      dataIndex:'edit',
      render: (text, record, index) => (
        <EditCell index={index} onDeleteCell={this.onDeleteCell} />
      )
    }
    const notesColumn={
      title:'Add Notes',
      dataIndex:'notes',
      render: (text, record, index) => (
        <NotesCell index={index} onDeleteCell={this.onDeleteCell} />
      )
    }
    columns.push(notesColumn);
    columns.push(editColumn);
    return columns;
};



const tableinfos = [
  {
    columns: clone(createColumns(columns)),
  }
];
const title = "Arrival List";
export { columns, tableinfos,title };

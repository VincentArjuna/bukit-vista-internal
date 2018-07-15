import React, { Component } from 'react';
import clone from 'clone';
import TableWrapper from '../antTable.style';
import {
  EditableCell,
  DeleteCell,
  BvEditCell,
  BvNotesCell
} from '../../../../../bvComponents/helper/table/helperCells';

export default class extends Component {
  constructor(props) {
    super(props);
    this.onCellChange = this.onCellChange.bind(this);
    this.onDeleteCell = this.onDeleteCell.bind(this);
    //this.onEditCell = this.onEditCell.bind(this);
    this.state = {
      columns: this.createcolumns(clone(this.props.tableInfo.columns)),
      dataList: this.props.dataList.getAll()
    };
  }
  createcolumns(columns) {
    //niya
    const editColumn = {
      dataIndex: 'edit',
      render: (text, record, index) => (
        <BvEditCell index={index} dataList={this.state.dataList}/>
      )
    };
    const notesColumn = {
      dataIndex: 'notes',
      render: (text, record, index) => (
        <BvNotesCell index={index} />
      )
    };
    columns.push(editColumn);
    columns.push(notesColumn);
    //end niya
    return columns;
  }
  onCellChange(value, columnsKey, index) {
    const { dataList } = this.state;
    dataList[index][columnsKey] = value;
    this.setState({ dataList });
  }
  onDeleteCell = index => {
    const { dataList } = this.state;
    dataList.splice(index, 1);
    this.setState({ dataList });
  };
  render() {
    const { columns, dataList } = this.state;

    return (
      <TableWrapper
        columns={columns}
        dataSource={dataList}
        className="isoEditableTable"
      />
    );
  }
}

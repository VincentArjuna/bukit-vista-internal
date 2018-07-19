import React, { Component } from 'react';
import TableWrapper, { CustomizedTableWrapper } from './antTable.style';
import clone from 'clone';
import {
  EditCell,
  NotesCell
} from './helper/helperCells';

const scroll = { y: 240 };
export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      dataList : this.props.dataList.getAll(),
      columns: this.createcolumns(clone(this.props.tableInfo.columns)),
      pagination: true,
      size: 'default',

    };
  }
//      scroll: scroll
  onChange(pagination, filters, sorter) {
    const { dataList } = this.props;
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }
      this.setState({ dataList: dataList.getAll() });
    }
  }

  createcolumns(columns) {
    const editColumn={
      render: (text, record, index) => (
        <EditCell index={index} onDeleteCell={this.onDeleteCell} />
      )
    }
    const notesColumn={
      render: (text, record, index) => (
        <NotesCell index={index} onDeleteCell={this.onDeleteCell} />
      )
    }
    columns.push(editColumn);
    columns.push(notesColumn);
    return columns;
  }

  render() {
    const classes = `isoEditableTable isoCustomizedTable isoSortingTable`;
    return (
      <CustomizedTableWrapper className="isoCustomizedTableWrapper">
        <TableWrapper
          {...this.state}
          onChange={this.onChange}
          columns={this.state.columns}
          dataSource={this.state.dataList}
          className={classes}
        />
      </CustomizedTableWrapper>
    );
  }
}

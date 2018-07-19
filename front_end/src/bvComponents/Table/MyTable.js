import React, { Component } from 'react';
import TableWrapper, { CustomizedTableWrapper } from './antTable.style';
import clone from 'clone';
import { connect } from 'tls';

const scroll = { y: 240 };
export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      dataList : this.props.dataList.getAll(),
      columns: this.props.columns,
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


  render() {
    const classes = `isoCustomizedTableWrapper`;
    return (
        <TableWrapper
          {...this.state}
          onChange={this.onChange}
          columns={this.state.columns}
          dataSource={this.state.dataList}
          className={classes}
        />
    );
  }
}
import React, { Component } from 'react';
import LayoutContentWrapper from '../Utility/layoutContent'
import TableDemoStyle from './demo.style';
import fakeData from './fakeData';
import MyTable from './MyTable';

const dataList = new fakeData(10);

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableinfos:this.props.tableinfos,
      columns:this.props.columns
    };
  }

  renderTable(tableInfo,columns,dataList) {
    let Component= MyTable;
    return <Component tableInfo={tableInfo} columns={columns} dataList={dataList} />;
  }
  //<TableDemoStyle className="isoLayoutContent">
  render() {
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        {this.renderTable(this.props.tableinfos,this.props.columns,dataList)}
      </LayoutContentWrapper>
    );
  }
}


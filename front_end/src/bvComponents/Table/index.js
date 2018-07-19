import React, { Component } from 'react';
import LayoutContentWrapper from '../Utility/layoutContent'
import TableDemoStyle from './demo.style';
import fakeData from './fakeData';
import { tableinfos } from './configs';
import MyTable from './MyTable';

const dataList = new fakeData(10);

export default class Table extends Component {
  renderTable(tableInfo) {
    let Component= MyTable;
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  render() {
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <TableDemoStyle className="isoLayoutContent">
            {this.renderTable(tableinfos[0])}
        </TableDemoStyle>
      </LayoutContentWrapper>
    );
  }
}


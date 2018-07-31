import React, { Component } from 'react';
import LayoutContentWrapper from '../Utility/layoutContent';
//import TableDemoStyle from './demo.style';
import fakeData from './fakeData';
import MyTable from './MyTable';

//const dataList = new fakeData(10);
//const dataList= [];
export default class Table extends Component {

  componentDidMount(){
    this.props.renderData();
  }
  render() {
    const {results} = this.props.mode;
    const dataList=results;
    return (
        <LayoutContentWrapper>
        <MyTable columns={this.props.columns} mode={this.props.mode} dataList={this.props.mode.results} />
        </LayoutContentWrapper>
    );
  }
}

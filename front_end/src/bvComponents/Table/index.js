import React, { Component } from 'react';
import LayoutContentWrapper from '../Utility/layoutContent';
import fakeData from './fakeData';
import MyTable from './MyTable';

//const dataList = new fakeData(10);
//const dataList= [];
export default class Table extends Component {

  componentDidMount(){
    this.props.renderData(null,null,0,0);
  }
  render() {
    const {results} = this.props.mode;
    return (
        <LayoutContentWrapper>
        <MyTable columns={this.props.columns} mode={this.props.mode} dataList={this.props.mode.results} />
        </LayoutContentWrapper>
    );
  }
}

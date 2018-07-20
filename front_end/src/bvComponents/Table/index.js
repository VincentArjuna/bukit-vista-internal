import React, { Component } from 'react';
import LayoutContentWrapper from '../Utility/layoutContent'
//import TableDemoStyle from './demo.style';
import fakeData from './fakeData';
import MyTable from './MyTable';

//const dataList = new fakeData(10);
//const dataList= [];
export default class Table extends Component {
  componentDidMount(){
    this.loadData(this.props.mode.title);
  }

  loadData=title=>{
    let param=null;
    switch(title){
      case "Arrival List":
        param=this.props.mode.area;
      default:
        param=this.props.mode.area;
    }
    this.props.renderData(param);
  }

  render() {
    const {results} = this.props.mode;
    const dataList=results;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} mode={this.props.mode} dataList={this.props.mode.results} />
      </LayoutContentWrapper>
    );
  }
}

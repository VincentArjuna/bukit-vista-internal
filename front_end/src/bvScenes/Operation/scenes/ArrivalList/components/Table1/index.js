import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table1/redux/table1/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const {renderData1} = actions;
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px'
};
class Table1 extends Component {
  componentDidMount(){
      this.props.renderData1(this.props.area,this.props.date,0,null,0);
  }
  render() {
    const {Table1} = this.props;
    if(Table1.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
      return (
        <LayoutContentWrapper style={{overflow:'auto'}}>
          <MyTable columns={this.props.columns} dataList={Table1.results} mode="arrivalList"/>
        </LayoutContentWrapper>
      );
    }
  }
}

function mapStateToProps(state) {
  return { 
    Table1: state.table1
  };
}
export default connect(
  mapStateToProps,
  { renderData1 }
)(Table1);

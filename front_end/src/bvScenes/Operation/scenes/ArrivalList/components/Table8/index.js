import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table8/redux/table8/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px'
};
const {renderData8} = actions;
class Table8 extends Component {
  componentDidMount(){
      this.props.renderData8(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table8} = this.props;
    if(Table8.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
      return (
        <LayoutContentWrapper style={{overflow:'auto'}}>
          <MyTable columns={this.props.columns} dataList={Table8.results} mode="arrivalList"/>
        </LayoutContentWrapper>
      );
    }
  }
}

function mapStateToProps(state) {
  return { Table8: state.table8 };
}
export default connect(
  mapStateToProps,
  { renderData8 }
)(Table8);

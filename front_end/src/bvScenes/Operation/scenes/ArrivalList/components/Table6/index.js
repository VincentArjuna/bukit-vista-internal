import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table6/redux/table6/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#f1f3f6',
  padding: '30px 50px'
};
const {renderData6} = actions;
class Table6 extends Component {
  componentDidMount(){
      this.props.renderData6(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table6} = this.props;
    const {Table4} = this.props;
    if(Table6.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table6.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
    }
  }
}

function mapStateToProps(state) {
  return { Table6: state.table6 };
}
export default connect(
  mapStateToProps,
  { renderData6 }
)(Table6);

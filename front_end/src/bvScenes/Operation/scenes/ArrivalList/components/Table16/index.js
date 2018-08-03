import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table16/redux/table16/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#f1f3f6',
  padding: '30px 50px'
};
const {renderData16} = actions;
class Table16 extends Component {
  componentDidMount(){
      this.props.renderData16(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table16} = this.props;
    if(Table16.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table16.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
    }
  }
}

function mapStateToProps(state) {
  return { Table16: state.table16 };
}
export default connect(
  mapStateToProps,
  { renderData16 }
)(Table16);

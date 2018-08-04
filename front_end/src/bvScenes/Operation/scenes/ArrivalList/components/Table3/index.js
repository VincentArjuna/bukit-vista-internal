import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table3/redux/table3/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px'
};
const {renderData3} = actions;
class Table3 extends Component {
  componentDidMount(){
      this.props.renderData3(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table3} = this.props;
    if(Table3.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
      return (
        <LayoutContentWrapper style={{overflow:'auto'}}>
          <MyTable columns={this.props.columns} dataList={Table3.results} mode="arrivalList"/>
        </LayoutContentWrapper>
      );
    }
  }
}

function mapStateToProps(state) {
  return { Table3: state.table3 };
}
export default connect(
  mapStateToProps,
  { renderData3 }
)(Table3);

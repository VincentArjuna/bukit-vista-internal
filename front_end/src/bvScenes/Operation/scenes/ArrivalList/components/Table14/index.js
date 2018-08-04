import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table14/redux/table14/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px'
};
const {renderData14} = actions;
class Table14 extends Component {
  componentDidMount(){
      this.props.renderData14(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table14} = this.props;
    if(Table14.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table14.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
  }
}

function mapStateToProps(state) {
  return { Table14: state.table14 };
}
export default connect(
  mapStateToProps,
  { renderData14 }
)(Table14);

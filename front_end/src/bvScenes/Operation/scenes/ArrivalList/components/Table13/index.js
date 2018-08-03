import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table13/redux/table13/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#f1f3f6',
  padding: '30px 50px'
};
const {renderData13} = actions;
class Table13 extends Component {
  componentDidMount(){
      this.props.renderData13(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table13} = this.props;
    if(Table13.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table13.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
    }
  }
}

function mapStateToProps(state) {
  return { Table13: state.table13 };
}
export default connect(
  mapStateToProps,
  { renderData13 }
)(Table13);

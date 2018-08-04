import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table15/redux/table15/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px'
};
const {renderData15} = actions;
class Table15 extends Component {
  componentDidMount(){
      this.props.renderData15(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table15} = this.props;
    if(Table15.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table15.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
    }
  }
}

function mapStateToProps(state) {
  return { Table15: state.table15 };
}
export default connect(
  mapStateToProps,
  { renderData15 }
)(Table15);

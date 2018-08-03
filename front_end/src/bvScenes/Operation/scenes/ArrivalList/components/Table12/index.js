import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table12/redux/table12/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#f1f3f6',
  padding: '30px 50px'
};
const {renderData12} = actions;
class Table12 extends Component {
  componentDidMount(){
      this.props.renderData12(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table12} = this.props;
    if(Table12.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table12.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
  }
}

function mapStateToProps(state) {
  return { Table12: state.table12 };
}
export default connect(
  mapStateToProps,
  { renderData12 }
)(Table12);

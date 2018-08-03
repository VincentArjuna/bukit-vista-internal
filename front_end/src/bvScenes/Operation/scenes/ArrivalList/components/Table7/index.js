import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table7/redux/table7/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#f1f3f6',
  padding: '30px 50px'
};
const {renderData7} = actions;
class Table7 extends Component {
  componentDidMount(){
      this.props.renderData7(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table7} = this.props;
    if(Table7.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table7.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
  }
}

function mapStateToProps(state) {
  return { Table7: state.table7 };
}
export default connect(
  mapStateToProps,
  { renderData7 }
)(Table7);

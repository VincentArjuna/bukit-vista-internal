import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table9/redux/table9/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px'
};
const {renderData9} = actions;
class Table9 extends Component {
  componentDidMount(){
      this.props.renderData9(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table9} = this.props;
    if(Table9.loading){
      return(
        <div style={style}>
          <Spin size="large"/>
        </div>);
    }else{
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table9.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
    }
  }
}

function mapStateToProps(state) {
  return { Table9: state.table9 };
}
export default connect(
  mapStateToProps,
  { renderData9 }
)(Table9);

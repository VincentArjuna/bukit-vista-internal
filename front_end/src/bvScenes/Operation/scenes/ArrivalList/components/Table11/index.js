import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table11/redux/table11/actions';

const {renderData11} = actions;
class Table11 extends Component {
  componentDidMount(){
      this.props.renderData11(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table11} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table11.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table11: state.table11 };
}
export default connect(
  mapStateToProps,
  { renderData11 }
)(Table11);

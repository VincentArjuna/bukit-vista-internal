import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table14/redux/table14/actions';

const {renderData14} = actions;
class Table14 extends Component {
  componentDidMount(){
      this.props.renderData14(this.props.area,this.props.date);
  }


  render() {
    const {Table14} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table14.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table14: state.table14 };
}
export default connect(
  mapStateToProps,
  { renderData14 }
)(Table14);

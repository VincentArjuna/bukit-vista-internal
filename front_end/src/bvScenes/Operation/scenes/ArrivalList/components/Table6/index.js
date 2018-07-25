import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table6/redux/table6/actions';

const {renderData6} = actions;
class Table6 extends Component {
  componentDidMount(){
      this.props.renderData6(this.props.area,this.props.date);
  }


  render() {
    const {Table6} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table6.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table6: state.table6 };
}
export default connect(
  mapStateToProps,
  { renderData6 }
)(Table6);

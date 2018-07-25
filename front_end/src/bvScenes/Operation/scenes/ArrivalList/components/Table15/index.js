import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table15/redux/table15/actions';

const {renderData15} = actions;
class Table15 extends Component {
  componentDidMount(){
      this.props.renderData15(this.props.area,this.props.date);
  }


  render() {
    const {Table15} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table15.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table15: state.table15 };
}
export default connect(
  mapStateToProps,
  { renderData15 }
)(Table15);

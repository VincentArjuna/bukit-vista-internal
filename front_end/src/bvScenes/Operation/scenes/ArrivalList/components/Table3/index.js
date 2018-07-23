import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table3/redux/table3/actions';

const {renderData3} = actions;
class Table3 extends Component {
  componentDidMount(){
      this.props.renderData3(this.props.area);
  }


  render() {
    const {Table3} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table3.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table3: state.table3 };
}
export default connect(
  mapStateToProps,
  { renderData3 }
)(Table3);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table2/redux/table2/actions';

const {renderData2} = actions;
class Table2 extends Component {
  componentDidMount(){
    this.props.renderData2(this.props.area);
  }

  render() {
    const{Table2} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table2.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}
function mapStateToProps(state) {
  return { Table2: state.table2 };
}
export default connect(
  mapStateToProps,
  { renderData2 }
)(Table2);
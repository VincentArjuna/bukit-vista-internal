import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table1/redux/table1/actions';

const {renderData1} = actions;
class Table1 extends Component {
  componentDidMount(){
      this.props.renderData1(this.props.area);
  }


  render() {
    const {Table1} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table1.results}/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table1: state.table1 };
}
export default connect(
  mapStateToProps,
  { renderData1 }
)(Table1);

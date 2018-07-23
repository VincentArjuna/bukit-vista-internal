import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table4/redux/table4/actions';

const {renderData4} = actions;
class Table4 extends Component {
  componentDidMount(){
      this.props.renderData4(this.props.area,this.props.date);
  }


  render() {
    const {Table4} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table4.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table4: state.table4 };
}
export default connect(
  mapStateToProps,
  { renderData4 }
)(Table4);

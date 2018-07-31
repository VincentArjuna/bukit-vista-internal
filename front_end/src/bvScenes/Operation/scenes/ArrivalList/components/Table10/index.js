import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table10/redux/table10/actions';

const {renderData10} = actions;
class Table10 extends Component {
  componentDidMount(){
      this.props.renderData10(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table10} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table10.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table10: state.table10 };
}
export default connect(
  mapStateToProps,
  { renderData10 }
)(Table10);

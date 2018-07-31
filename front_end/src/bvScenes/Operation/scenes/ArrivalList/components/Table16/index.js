import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table16/redux/table16/actions';

const {renderData16} = actions;
class Table16 extends Component {
  componentDidMount(){
      this.props.renderData16(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table16} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table16.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table16: state.table16 };
}
export default connect(
  mapStateToProps,
  { renderData16 }
)(Table16);

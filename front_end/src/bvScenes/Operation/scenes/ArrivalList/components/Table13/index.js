import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table13/redux/table13/actions';

const {renderData13} = actions;
class Table13 extends Component {
  componentDidMount(){
      this.props.renderData13(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table13} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table13.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table13: state.table13 };
}
export default connect(
  mapStateToProps,
  { renderData13 }
)(Table13);

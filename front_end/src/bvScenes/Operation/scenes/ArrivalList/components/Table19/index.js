import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table19/redux/table19/actions';

const {renderData19} = actions;
class Table19 extends Component {
  componentDidMount(){
      this.props.renderData19(this.props.area,this.props.date);
  }


  render() {
    const {Table19} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table19.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table19: state.table19 };
}
export default connect(
  mapStateToProps,
  { renderData19 }
)(Table19);

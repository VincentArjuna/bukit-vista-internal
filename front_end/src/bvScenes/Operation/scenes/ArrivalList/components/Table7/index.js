import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table7/redux/table7/actions';

const {renderData7} = actions;
class Table7 extends Component {
  componentDidMount(){
      this.props.renderData7(this.props.area,this.props.date);
  }


  render() {
    const {Table7} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table7.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table7: state.table7 };
}
export default connect(
  mapStateToProps,
  { renderData7 }
)(Table7);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table21/redux/table21/actions';

const {renderData21} = actions;
class Table21 extends Component {
  componentDidMount(){
      this.props.renderData21(this.props.area,this.props.date);
  }


  render() {
    const {Table21} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table21.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table21: state.table21 };
}
export default connect(
  mapStateToProps,
  { renderData21 }
)(Table21);

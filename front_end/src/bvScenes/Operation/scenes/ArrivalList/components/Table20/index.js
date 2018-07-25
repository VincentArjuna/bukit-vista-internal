import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table20/redux/table20/actions';

const {renderData20} = actions;
class Table20 extends Component {
  componentDidMount(){
      this.props.renderData20(this.props.area,this.props.date);
  }


  render() {
    const {Table20} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table20.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table20: state.table20 };
}
export default connect(
  mapStateToProps,
  { renderData20 }
)(Table20);

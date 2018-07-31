import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table18/redux/table18/actions';

const {renderData18} = actions;
class Table18 extends Component {
  componentDidMount(){
      this.props.renderData18(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table18} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table18.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table18: state.table18 };
}
export default connect(
  mapStateToProps,
  { renderData18 }
)(Table18);

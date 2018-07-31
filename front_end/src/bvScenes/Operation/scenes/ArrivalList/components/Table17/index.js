import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table17/redux/table17/actions';

const {renderData17} = actions;
class Table17 extends Component {
  componentDidMount(){
      this.props.renderData17(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table17} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table17.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table17: state.table17 };
}
export default connect(
  mapStateToProps,
  { renderData17 }
)(Table17);

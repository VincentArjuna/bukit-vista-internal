import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table9/redux/table9/actions';

const {renderData9} = actions;
class Table9 extends Component {
  componentDidMount(){
      this.props.renderData9(this.props.area,this.props.date,0,null,0);
  }


  render() {
    const {Table9} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table9.results} mode="arrivalList"/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table9: state.table9 };
}
export default connect(
  mapStateToProps,
  { renderData9 }
)(Table9);

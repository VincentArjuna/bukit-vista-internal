import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '../../../../../../bvComponents/Utility/layoutContent';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import actions from '../Table5/redux/table5/actions';

const {renderData5} = actions;
class Table5 extends Component {
  componentDidMount(){
      this.props.renderData5(this.props.area);
  }


  render() {
    const {Table5} = this.props;
    return (
      <LayoutContentWrapper style={{overflow:'auto'}}>
        <MyTable columns={this.props.columns} dataList={Table5.results}/>
      </LayoutContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { Table5: state.table5 };
}
export default connect(
  mapStateToProps,
  { renderData5 }
)(Table5);

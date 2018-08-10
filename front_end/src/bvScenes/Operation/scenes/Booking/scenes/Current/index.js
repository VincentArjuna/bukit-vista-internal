import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes,mode} from './config.js';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import Header from '../../../../../../bvComponents/Header/index.js';
import actions from './redux/bookingCurrent/actions';

const {renderDataBc,onPageChange}=actions;
class Current extends Component {
  componentDidMount(){
    this.props.renderDataBc(0,0,0,0);
  }
  render() {
    return (    
        <div>
          <Header title={title} mode={mode} columns={columns} filters={filterTypes}/>
            <LayoutContentWrapper>
              <LayoutContent>
              <MyTable 
                columns={columns}
                dataList={this.props.Current.results}
                total={this.props.Current.total}
                mode={mode}
                onPageChange={this.props.onPageChange}
                page={this.props.Current.page}
              />
                </LayoutContent>
            </LayoutContentWrapper>
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
    Current :state.bookingCurrent,
  };
}
export default connect(
  mapStateToProps,
  {renderDataBc,onPageChange}
)(Current);


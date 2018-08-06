import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes} from './config.js';
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
          <Header title={title} columns={columns} filters={filterTypes}/>
            <LayoutContentWrapper>
              <LayoutContent>
              <MyTable 
                columns={columns}
                mode={Current}
                dataList={this.props.Current.results}
                total={this.props.Current.total}
                page={this.props.Current.page}
                onPageChange={onPageChange}
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


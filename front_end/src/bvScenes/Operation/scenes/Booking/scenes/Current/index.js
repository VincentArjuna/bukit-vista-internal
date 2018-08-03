import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes} from './config.js';
import Table from '../../../../../../bvComponents/Table';
import Header from '../../../../../../bvComponents/Header/index.js';
import actions from './redux/bookingCurrent/actions';

const {renderDataBc}=actions;
class Current extends Component {
  componentDidMount(){
    this.props.Header.filterType=null;
    this.props.Header.filterValue = null;
  }
  render() {
    const {renderDataBc,Current}=this.props;
    return (    
        <div>
          <Header title={title} columns={columns} filters={filterTypes}/>
            <LayoutContentWrapper>
              <Table 
                columns={columns}
                mode={Current}
                renderData={renderDataBc}  
              />
            </LayoutContentWrapper>
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
    Current :state.bookingCurrent,
    Header : state.header
  };
}
export default connect(
  mapStateToProps,
  {renderDataBc}
)(Current);


import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../../../../components/utility/layoutContent";
import {columns,title} from './config.js';
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
          <Header title={title} columns={columns}/>
            <LayoutContentWrapper style={{ height: "100vh"}}>
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


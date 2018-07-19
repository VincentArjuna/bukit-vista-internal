import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import PageHeader from "../../../../bvComponents/Utility/pageHeader.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,tableinfos,areas,title} from './config.js';
import Table from '../../../../bvComponents/Table/';
import Header from '../../../../bvComponents/Header/index.js';
import actions from './redux/arrivalList/actions';


const {renderArea,parseArea} = actions;
class ArrivalList extends Component {

  onSearch=e=>{
    alert('#TODO');
  }

  render() {
    return (
      <div>
        <Header title={title} columns={columns}/>
        {areas.map(area=>(
          <LayoutContentWrapper style={{ height: "100vh"}}>
            <PageHeader>{area}</PageHeader>
            <Table 
              tableinfos={tableinfos} 
              columns={columns} 
              ArrivalList={ArrivalList}
              renderArea={renderArea}
              parseArea={parseArea}
              area={this.props.area}
            />
          </LayoutContentWrapper>
        ))}
          <LayoutContentWrapper style={{ height: "5vh"}}>
          </LayoutContentWrapper>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {ArrivalList: state.arrivalList};
}
export default connect(
  mapStateToProps,
  {renderArea,parseArea}
)(ArrivalList);
import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import PageHeader from "../../../../bvComponents/Utility/pageHeader.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,title} from './config.js';
import Table from '../../../../bvComponents/Table';
import Header from '../../../../bvComponents/Header/index.js';
import actions from './redux/arrivalList/actions';

const areas = [
  { name:'Yogyakarta',
    code:'A0001'
  },
  { name:'Uluwatu',
    code:'A0002'
  },
  { name:'Canggu',
    code:'A0003'
  },
  { name:'Ubud',
    code:'A0004'
  },
  { name:'Jakarta',
    code:'A0005'
  },
  { name:'Bandung',
    code:'A0006'
  },
  { name:'Phuket',
    code:'A0007'
  },
  { name:'Bingin',
    code:'A0008'
  },
  { name:'Balangan',
    code:'A0009'
  },
  { name:'Jimbaran',
    code:'A0010'
  },
  { name:'Ungasan',
    code:'A0011'
  },
  {
    name:'Nusa Dua',
    code:'A0012'
  },
  {
    name:'Padang Padang',
    code:'A0013'
  },
  {
    name:'Gili Trawangan',
    code:'A0014'
  },
  {
    name:'Seminyak',
    code:'A0015'
  },
  {
    name:'Kuta',
    code:'A0016'
  },
  {
    name:'Singapore',
    code:'A0017'
  },
  {
    name:'Cemangi',
    code:'A0018'
  },
  {
    name:'Penang',
    code:'A0019'
  },
  {
    name:'Nusa Penida',
    code:'A0020'
  }
];
const {renderData,renderDataSuccess}=actions;
class ArrivalList extends Component {

  onSearch=e=>{
    alert('#TODO');
  }
  render() {
    const {renderData,ArrivalList}=this.props;
    this.props.ArrivalList.title=title;
    return (
      <div>
        <Header title={title} columns={columns}/>
        {areas.map(area=>(
          <LayoutContentWrapper style={{ height: "100vh"}}>
            <PageHeader>{area.name}</PageHeader>
            {this.props.ArrivalList.area=area.code}
            <Table
              columns={columns}
              mode={ArrivalList}
              renderData={renderData}
            />
          </LayoutContentWrapper>
        ))}
          <LayoutContentWrapper style={{ height: "5vh"}}>
          </LayoutContentWrapper>
      </div>
    );
  }
}
{/* <Table 
title="Arrival List"
mode={ArrivalList}
area={area.code}
columns={columns}
/> */}

function mapStateToProps(state){
  return {
    ArrivalList:state.arrivalList
  };
}
export default connect(
  mapStateToProps,
  {renderData}
)(ArrivalList);
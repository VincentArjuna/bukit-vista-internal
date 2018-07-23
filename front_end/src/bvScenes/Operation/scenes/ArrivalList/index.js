import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import PageHeader from "../../../../bvComponents/Utility/pageHeader.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,title} from './config.js';
import Table1 from '../ArrivalList/components/Table1';
import Table2 from '../ArrivalList/components/Table2';
import Table3 from '../ArrivalList/components/Table3';
import Table4 from '../ArrivalList/components/Table4';
import Table5 from '../ArrivalList/components/Table5';
import Header from '../../../../bvComponents/Header/index.js';

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

export default class ArrivalList extends Component {
  render() {
    return (
      <div>
        <Header title={title} columns={columns}/>
          <LayoutContentWrapper style={{ height: "100vh"}}>
            <PageHeader>{areas[0].name}</PageHeader>
            <Table1 columns={columns} area={areas[0].code}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[1].name}</PageHeader>
            <Table2 columns={columns} area={areas[1].code}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[2].name}</PageHeader>
            <Table3 columns={columns} area={areas[2].code}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[3].name}</PageHeader>
            <Table4 columns={columns} area={areas[3].code}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[4].name}</PageHeader>
            <Table5 columns={columns} area={areas[4].code}/>
          </LayoutContentWrapper>
        <LayoutContentWrapper style={{ height: "5vh"}}>
        </LayoutContentWrapper>
      </div>
    );
  }
}


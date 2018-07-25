import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import PageHeader from "../../../../bvComponents/Utility/pageHeader.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,title} from './config.js';
import Table1 from '../ArrivalList/components/Table1';
import Table2 from '../ArrivalList/components/Table2';
import Table3 from '../ArrivalList/components/Table3';
import Table4 from '../ArrivalList/components/Table4';
import Table5 from '../ArrivalList/components/Table5';
import Table6 from '../ArrivalList/components/Table6';
import Table7 from '../ArrivalList/components/Table7';
import Table8 from '../ArrivalList/components/Table8';
import Table9 from '../ArrivalList/components/Table9';
import Table10 from '../ArrivalList/components/Table10';
import Table11 from '../ArrivalList/components/Table11';
import Table12 from '../ArrivalList/components/Table12';
import Table13 from '../ArrivalList/components/Table13';
import Table14 from '../ArrivalList/components/Table14';
import Table15 from '../ArrivalList/components/Table15';
import Table16 from '../ArrivalList/components/Table16';
import Table17 from '../ArrivalList/components/Table17';
import Table18 from '../ArrivalList/components/Table18';
import Table19 from '../ArrivalList/components/Table19';
import Table20 from '../ArrivalList/components/Table20';
import Table21 from '../ArrivalList/components/Table21';

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
  },
  {
    name:'Gili Air',
    code:'A0021'
  }
];

export default class ArrivalList extends Component {
  render() {
    return (
      <div>
        <Header title={title} columns={columns} date={moment().toString()}/>
        {console.log(moment().toString())}
          <LayoutContentWrapper>
            <PageHeader>{areas[0].name}</PageHeader>
            <Table1 columns={columns} area={areas[0].code} date={moment().format('YYYY-MM-DD').toString()}/>
            {console.log("date : " + moment().format('YYYY-MM-DD').toString())}
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[1].name}</PageHeader>
            <Table2 columns={columns} area={areas[1].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[2].name}</PageHeader>
            <Table3 columns={columns} area={areas[2].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[3].name}</PageHeader>
            <Table4 columns={columns} area={areas[3].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[4].name}</PageHeader>
            <Table5 columns={columns} area={areas[4].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[5].name}</PageHeader>
            <Table6 columns={columns} area={areas[5].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[6].name}</PageHeader>
            <Table7 columns={columns} area={areas[6].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[7].name}</PageHeader>
            <Table8 columns={columns} area={areas[7].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[8].name}</PageHeader>
            <Table9 columns={columns} area={areas[8].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[9].name}</PageHeader>
            <Table10 columns={columns} area={areas[9].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[10].name}</PageHeader>
            <Table11 columns={columns} area={areas[10].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[11].name}</PageHeader>
            <Table12 columns={columns} area={areas[12].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[12].name}</PageHeader>
            <Table13 columns={columns} area={areas[13].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[13].name}</PageHeader>
            <Table14 columns={columns} area={areas[14].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[14].name}</PageHeader>
            <Table15 columns={columns} area={areas[14].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[15].name}</PageHeader>
            <Table16 columns={columns} area={areas[15].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[16].name}</PageHeader>
            <Table17 columns={columns} area={areas[16].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[17].name}</PageHeader>
            <Table18 columns={columns} area={areas[17].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[18].name}</PageHeader>
            <Table19 columns={columns} area={areas[18].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[19].name}</PageHeader>
            <Table20 columns={columns} area={areas[19].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>
          <LayoutContentWrapper>
            <PageHeader>{areas[20].name}</PageHeader>
            <Table21 columns={columns} area={areas[20].code} date={moment().format('YYYY-MM-DD').toString()}/>
          </LayoutContentWrapper>


        <LayoutContentWrapper style={{ height: "5vh"}}>
        </LayoutContentWrapper>
      </div>
    );
  }
}


import React, { Component } from "react";
import { Row, Col} from 'antd';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import PageHeader from "../../../../bvComponents/Utility/pageHeader.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,tableinfos,areas,title} from './config.js';
import Table from '../../../../bvComponents/Table/';
import Header from '../../../../bvComponents/Header/index.js';

export default class ArrivalList extends Component {

  onSearch=e=>{
    alert('#TODO');
  }
  
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <div>
        <Header title={title} columns={columns}/>
        {areas.map(area=>(
          <LayoutContentWrapper style={{ height: "100vh"}}>
            <PageHeader>{area}</PageHeader>
            <Table tableinfos={tableinfos} columns={columns}/>
          </LayoutContentWrapper>
        ))}
          <LayoutContentWrapper style={{ height: "5vh"}}>
          </LayoutContentWrapper>
      </div>
    );
  }
}

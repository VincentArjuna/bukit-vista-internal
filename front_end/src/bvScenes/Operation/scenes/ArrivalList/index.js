import React, { Component } from "react";
import { Row, Col } from 'antd';
import Box from  '../../../../bvComponents/Utility/box';
import moment from 'moment';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,title,areas} from './config.js';
import { Collapse } from 'antd';
import CollapseWrapper from '../../../../bvComponents/Collapse/collapse.style';
import ContentHolder from '../../../../bvComponents/Utility/contentHolder';
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

const Panel = Collapse.Panel;
const Collapses = props => (
  <CollapseWrapper>
    <Collapse {...props}>{props.children}</Collapse>
  </CollapseWrapper>
);


export default class ArrivalList extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <div>
        <Header title={title} columns={columns} date={moment().format('YYYY-MM-DD').toString()}/>  
        <LayoutContentWrapper>
          <Box>    
            <Row style={rowStyle} justify="start" align="middle">
              <Col md={24} sm={12} xs={24} style={colStyle}>
              <ContentHolder>
                  <Collapses defaultActiveKey={['1']}>
                    <Panel header={areas[0].name} key={1}>
                      <Table1 area={areas[0].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[1].name} key={2}>
                      <Table2 area={areas[1].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[2].name} key={3}>
                    <Table3 area={areas[2].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[3].name} key={4}>
                      <Table4 area={areas[3].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[4].name} key={5}>
                      <Table5 area={areas[4].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[5].name} key={6}>
                      <Table6 area={areas[5].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[6].name} key={7}>
                    <Table7 area={areas[6].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[7].name} key={8}>
                      <Table8 area={areas[7].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[8].name} key={9}>
                      <Table9 area={areas[8].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[9].name} key={10}>
                      <Table10 area={areas[9].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[10].name} key={11}>
                      <Table11 area={areas[10].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[11].name} key={12}>
                      <Table12 area={areas[11].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[12].name} key={13}>
                      <Table13 area={areas[12].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[13].name} key={14}>
                      <Table14 area={areas[13].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[14].name} key={15}>
                      <Table15 area={areas[14].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[15].name} key={16}>
                      <Table16 area={areas[15].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[16].name} key={17}>
                      <Table17 area={areas[16].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[17].name} key={18}>
                      <Table18 area={areas[17].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[18].name} key={19}>
                      <Table19 area={areas[18].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[19].name} key={20}>
                      <Table20 area={areas[19].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                    <Panel header={areas[20].name} key={21}>
                      <Table21 area={areas[20].code} date={moment().format('YYYY-MM-DD').toString()} columns={columns}/>
                    </Panel>
                  </Collapses>
                </ContentHolder>
                
              </Col>
            </Row>
            </Box>
            </LayoutContentWrapper>
      </div>
    );
  }
}

{/* 
















 */}
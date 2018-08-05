import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col } from 'antd';
import Box from  '../../../../bvComponents/Utility/box';
import moment from 'moment';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,title,areas,filterTypes} from './config.js';
import { Collapse } from 'antd';
import CollapseWrapper from '../../../../bvComponents/Collapse/collapse.style';
import ContentHolder from '../../../../bvComponents/Utility/contentHolder';

import Header from '../../../../bvComponents/Header/index.js';
//import Table1 from '../ArrivalList/components/Table1';
import Table2 from '../ArrivalList/components/Table2';
import MyTable from '../../../../bvComponents/Table/MyTable';
import actions from '../ArrivalList/components/Table1/redux/table1/actions';
const Panel = Collapse.Panel;
const Collapses = props => (
  <CollapseWrapper>
    <Collapse {...props}>{props.children}</Collapse>
  </CollapseWrapper>
);
const {testFunc}=actions;
class ArrivalList extends Component {
  componentDidMount(){
    this.props.testFunc(0,'A0001',"2018-08-08",0,null,0);
    this.props.testFunc(1,'A0002',"2018-08-08",0,null,0);
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <div>
        <Header title={title} filters={filterTypes} date={moment().format('YYYY-MM-DD').toString()}/>  
        <LayoutContentWrapper>
          <Box>    
            <Row style={rowStyle} justify="start" align="middle">
              <Col md={24} sm={12} xs={24} style={colStyle}>
                {this.props.Table1.tableData[0].area}
                {this.props.Table1.tableData[1].area}
                <MyTable columns={columns} dataList={this.props.Table1.tableData[0].results} mode="arrivalList"/>
                <MyTable columns={columns} dataList={this.props.Table1.tableData[1].results} mode="arrivalList"/>
              </Col>
            </Row>
          </Box>
        </LayoutContentWrapper>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    Table1 : state.table1
  };
}
export default connect(mapStateToProps,{testFunc}) (ArrivalList);
// export default connect(mapStateToProps,null)(ArrivalList);
{/* <Panel header={areas[2].name} key={3}>
<Table3 area={areas[2].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[3].name} key={4}>
  <Table4 area={areas[3].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[4].name} key={5}>
  <Table5 area={areas[4].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[5].name} key={6}>
  <Table6 area={areas[5].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[6].name} key={7}>
<Table7 area={areas[6].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[7].name} key={8}>
  <Table8 area={areas[7].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[8].name} key={9}>
  <Table9 area={areas[8].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[9].name} key={10}>
  <Table10 area={areas[9].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[10].name} key={11}>
  <Table11 area={areas[10].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[11].name} key={12}>
  <Table12 area={areas[11].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[12].name} key={13}>
  <Table13 area={areas[12].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[13].name} key={14}>
  <Table14 area={areas[13].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[14].name} key={15}>
  <Table15 area={areas[14].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[15].name} key={16}>
  <Table16 area={areas[15].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[16].name} key={17}>
  <Table17 area={areas[16].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[17].name} key={18}>
  <Table18 area={areas[17].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[18].name} key={19}>
  <Table19 area={areas[18].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[19].name} key={20}>
  <Table20 area={areas[19].code} date={this.props.DateRange.date} columns={columns}/>
</Panel>
<Panel header={areas[20].name} key={21}>
  <Table21 area={areas[20].code} date={this.props.DateRange.date} columns={columns}/>
</Panel> */}
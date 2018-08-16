import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col } from 'antd';
import Box from  '../../../../bvComponents/Utility/box';
import moment from 'moment';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import basicStyle from '../../../../settings/basicStyle.js';
import {columns,title,areas,filterTypes,mode} from './config.js';
import { Collapse } from 'antd';
import CollapseWrapper from '../../../../bvComponents/Collapse/collapse.style';
import ContentHolder from '../../../../bvComponents/Utility/contentHolder';
import Spin from '../../../../bvComponents/Spin/spin.style';
import notification from '../../../../bvComponents/Notification';

import Header from '../../../../bvComponents/Header/index.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import actions from '../ArrivalList/components/ArrivalTable/redux/arrivalTable/actions';

const Panel = Collapse.Panel;
const Collapses = props => (
  <CollapseWrapper>
    <Collapse {...props}>{props.children}</Collapse>
  </CollapseWrapper>
);
const style = {
  textAlign: 'center',
  background: '#ffffff',
  padding: '30px 50px',
  height:'100%'
};
const {renderData,initializeState,resetState,onPageChange}=actions;

class ArrivalList extends Component {
  componentDidMount(){
    this.props.Table.checkCount=0;
    this.props.Table.totalData=0;
    const areasLen = areas.length;
    areas.map((area,i)=>{areasLen === i ? this.props.initializeState(i):this.props.initializeState(area.key);});
    areas.map((area,i)=>{
      areasLen === i ? 
      this.props.renderData(i,area.code,this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType)
      :this.props.renderData(area.key,area.code,this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType);
    });
  }
  render() {
   
    const { rowStyle, colStyle } = basicStyle;
    if(this.props.Table.checkCount>0){
      return (
        <div>
          <Header totalData={this.props.Table.totalData} mode={mode}title={title} filters={filterTypes}/>  
          <LayoutContentWrapper>
            <Box>    
              <Row style={rowStyle} justify="start" align="middle">
                <Col md={24} sm={12} xs={24} style={colStyle}>
                <ContentHolder>
                  <Collapses>
                    {this.props.Table.tableData[0].total > 0 || this.props.Table.tableData[0].isFilled? 
                      <Panel header={areas[0].name + ' / ' + this.props.Table.tableData[0].total} key={0}>
                        <MyTable sort={this.props.Table.tableData[0].sort}  loading={this.props.Table.tableData[0].loading} onPageChange={this.props.onPageChange}  index={0}  area={areas[0].code} key={0}  columns={columns} dataList={this.props.Table.tableData[0].results} total={this.props.Table.tableData[0].total} page={this.props.Table.tableData[0].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[1].total > 0 || this.props.Table.tableData[1].isFilled ? 
                      <Panel header={areas[1].name + ' / ' + this.props.Table.tableData[1].total} key={1}>
                        <MyTable sort={this.props.Table.tableData[1].sort}  loading={this.props.Table.tableData[1].loading} onPageChange={this.props.onPageChange}  index={1}  area={areas[1].code} key={1} columns={columns} dataList={this.props.Table.tableData[1].results} total={this.props.Table.tableData[1].total} page={this.props.Table.tableData[1].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[2].total > 0 || this.props.Table.tableData[2].isFilled ? 
                      <Panel header={areas[2].name + ' / ' + this.props.Table.tableData[2].total} key={2}>
                        <MyTable sort={this.props.Table.tableData[2].sort}  loading={this.props.Table.tableData[2].loading} onPageChange={this.props.onPageChange}  index={2}  area={areas[2].code} key={2} columns={columns} dataList={this.props.Table.tableData[2].results} total={this.props.Table.tableData[2].total} page={this.props.Table.tableData[2].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[3].total > 0 || this.props.Table.tableData[3].isFilled ? 
                      <Panel header={areas[3].name + ' / ' + this.props.Table.tableData[3].total} key={3}>
                        <MyTable sort={this.props.Table.tableData[3].sort}  loading={this.props.Table.tableData[3].loading} onPageChange={this.props.onPageChange}  index={3}  area={areas[3].code} key={3} columns={columns} dataList={this.props.Table.tableData[3].results} total={this.props.Table.tableData[3].total} page={this.props.Table.tableData[3].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[4].total > 0 || this.props.Table.tableData[4].isFilled ? 
                      <Panel header={areas[4].name + ' / ' + this.props.Table.tableData[4].total} key={4}>
                        <MyTable sort={this.props.Table.tableData[4].sort}  loading={this.props.Table.tableData[4].loading} onPageChange={this.props.onPageChange}  index={4}  area={areas[4].code} key={4} columns={columns} dataList={this.props.Table.tableData[4].results} total={this.props.Table.tableData[4].total} page={this.props.Table.tableData[4].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[5].total > 0 || this.props.Table.tableData[5].isFilled ? 
                      <Panel header={areas[5].name + ' / ' + this.props.Table.tableData[5].total} key={5}>
                        <MyTable sort={this.props.Table.tableData[5].sort}  loading={this.props.Table.tableData[5].loading} onPageChange={this.props.onPageChange}  index={5}  area={areas[5].code} key={5} columns={columns} dataList={this.props.Table.tableData[5].results} total={this.props.Table.tableData[5].total} page={this.props.Table.tableData[5].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[6].total > 0 || this.props.Table.tableData[6].isFilled ? 
                      <Panel header={areas[6].name + ' / ' + this.props.Table.tableData[6].total} key={6}>
                        <MyTable sort={this.props.Table.tableData[6].sort}  loading={this.props.Table.tableData[6].loading} onPageChange={this.props.onPageChange}  index={6}  area={areas[6].code} key={6} columns={columns} dataList={this.props.Table.tableData[6].results} total={this.props.Table.tableData[6].total} page={this.props.Table.tableData[6].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[7].total > 0 || this.props.Table.tableData[7].isFilled? 
                      <Panel header={areas[7].name + ' / ' + this.props.Table.tableData[7].total} key={7}>
                        <MyTable sort={this.props.Table.tableData[7].sort}  loading={this.props.Table.tableData[7].loading} onPageChange={this.props.onPageChange}  index={7}  area={areas[7].code} key={7} columns={columns} dataList={this.props.Table.tableData[7].results} total={this.props.Table.tableData[7].total} page={this.props.Table.tableData[7].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[8].total > 0  || this.props.Table.tableData[8].isFilled? 
                      <Panel header={areas[8].name + ' / ' + this.props.Table.tableData[8].total} key={8}>
                        <MyTable sort={this.props.Table.tableData[8].sort}  loading={this.props.Table.tableData[8].loading} onPageChange={this.props.onPageChange}  index={8}  area={areas[8].code} key={8} columns={columns} dataList={this.props.Table.tableData[8].results} total={this.props.Table.tableData[8].total} page={this.props.Table.tableData[8].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[9].total > 0 || this.props.Table.tableData[9].isFilled ? 
                      <Panel header={areas[9].name + ' / ' + this.props.Table.tableData[9].total} key={9}>
                        <MyTable sort={this.props.Table.tableData[9].sort}  loading={this.props.Table.tableData[9].loading} onPageChange={this.props.onPageChange}  index={9}  area={areas[9].code} key={9} columns={columns} dataList={this.props.Table.tableData[9].results} total={this.props.Table.tableData[9].total} page={this.props.Table.tableData[9].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[10].total > 0 || this.props.Table.tableData[10].isFilled ? 
                      <Panel header={areas[10].name + ' / ' + this.props.Table.tableData[10].total} key={10}>
                        <MyTable sort={this.props.Table.tableData[10].sort}  loading={this.props.Table.tableData[10].loading} onPageChange={this.props.onPageChange}  index={10}  area={areas[10].code} key={10} columns={columns} dataList={this.props.Table.tableData[10].results} total={this.props.Table.tableData[10].total} page={this.props.Table.tableData[10].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[11].total > 0 || this.props.Table.tableData[11].isFilled ? 
                      <Panel header={areas[11].name + ' / ' + this.props.Table.tableData[11].total} key={11}>
                        <MyTable sort={this.props.Table.tableData[11].sort}  loading={this.props.Table.tableData[11].loading} onPageChange={this.props.onPageChange}  index={11}  area={areas[11].code} key={11} columns={columns} dataList={this.props.Table.tableData[11].results} total={this.props.Table.tableData[11].total} page={this.props.Table.tableData[11].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[12].total > 0  || this.props.Table.tableData[12].isFilled? 
                      <Panel header={areas[12].name + ' / ' + this.props.Table.tableData[12].total} key={12}>
                        <MyTable sort={this.props.Table.tableData[12].sort}  loading={this.props.Table.tableData[12].loading} onPageChange={this.props.onPageChange}  index={12}  area={areas[12].code} key={12} columns={columns} dataList={this.props.Table.tableData[12].results} total={this.props.Table.tableData[12].total} page={this.props.Table.tableData[12].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                    {this.props.Table.tableData[13].total > 0  || this.props.Table.tableData[13].isFilled? 
                      <Panel header={areas[13].name + ' / ' + this.props.Table.tableData[13].total} key={13}>
                        <MyTable sort={this.props.Table.tableData[13].sort}  loading={this.props.Table.tableData[13].loading} onPageChange={this.props.onPageChange}  index={13}  area={areas[13].code} key={13} columns={columns} dataList={this.props.Table.tableData[13].results} total={this.props.Table.tableData[13].total} page={this.props.Table.tableData[13].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[14].total > 0 || this.props.Table.tableData[14].isFilled ? 
                      <Panel header={areas[14].name + ' / ' + this.props.Table.tableData[14].total} key={14}>
                        <MyTable sort={this.props.Table.tableData[14].sort}  loading={this.props.Table.tableData[14].loading} onPageChange={this.props.onPageChange}  index={14}  area={areas[14].code} key={14} columns={columns} dataList={this.props.Table.tableData[14].results} total={this.props.Table.tableData[14].total} page={this.props.Table.tableData[14].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[15].total > 0  || this.props.Table.tableData[15].isFilled? 
                      <Panel header={areas[15].name + ' / ' + this.props.Table.tableData[15].total} key={15}>
                        <MyTable sort={this.props.Table.tableData[15].sort}  loading={this.props.Table.tableData[15].loading} onPageChange={this.props.onPageChange}  index={15}  area={areas[15].code} key={15} columns={columns} dataList={this.props.Table.tableData[15].results} total={this.props.Table.tableData[15].total} page={this.props.Table.tableData[15].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[16].total > 0 || this.props.Table.tableData[16].isFilled ? 
                      <Panel header={areas[16].name + ' / ' + this.props.Table.tableData[16].total} key={16}>
                        <MyTable sort={this.props.Table.tableData[16].sort}  loading={this.props.Table.tableData[16].loading} onPageChange={this.props.onPageChange}  index={16}  area={areas[16].code} key={16} columns={columns} dataList={this.props.Table.tableData[16].results} total={this.props.Table.tableData[16].total} page={this.props.Table.tableData[16].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[17].total > 0  || this.props.Table.tableData[17].isFilled? 
                      <Panel header={areas[17].name + ' / ' + this.props.Table.tableData[17].total} key={17}>
                        <MyTable sort={this.props.Table.tableData[17].sort}  loading={this.props.Table.tableData[17].loading} onPageChange={this.props.onPageChange}  index={17}  area={areas[17].code} key={17} columns={columns} dataList={this.props.Table.tableData[17].results} total={this.props.Table.tableData[17].total} page={this.props.Table.tableData[17].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[18].total > 0  || this.props.Table.tableData[18].isFilled? 
                      <Panel header={areas[18].name + ' / ' + this.props.Table.tableData[18].total} key={18}>
                        <MyTable sort={this.props.Table.tableData[18].sort}  loading={this.props.Table.tableData[18].loading} onPageChange={this.props.onPageChange}  index={18}  area={areas[18].code} key={18} columns={columns} dataList={this.props.Table.tableData[18].results} total={this.props.Table.tableData[18].total} page={this.props.Table.tableData[18].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[19].total > 0 || this.props.Table.tableData[19].isFilled ? 
                      <Panel header={areas[19].name + ' / ' + this.props.Table.tableData[19].total} key={19}>
                        <MyTable sort={this.props.Table.tableData[19].sort}  loading={this.props.Table.tableData[19].loading} onPageChange={this.props.onPageChange}  index={19}  area={areas[19].code} key={19} columns={columns} dataList={this.props.Table.tableData[19].results} total={this.props.Table.tableData[19].total} page={this.props.Table.tableData[19].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                      {this.props.Table.tableData[20].total > 0  || this.props.Table.tableData[20].isFilled? 
                      <Panel header={areas[20].name + ' / ' + this.props.Table.tableData[20].total} key={20}>
                        <MyTable sort={this.props.Table.tableData[20].sort}  loading={this.props.Table.tableData[20].loading} onPageChange={this.props.onPageChange}  index={20}  area={areas[20].code} key={20} columns={columns} dataList={this.props.Table.tableData[20].results} total={this.props.Table.tableData[20].total} page={this.props.Table.tableData[20].page} mode="arrivalList"/>
                      </Panel> 
                    : null}
                  </Collapses>
                </ContentHolder>
                </Col>
              </Row>
            </Box>
            {this.props.Table.checkCount===21 ? notification("success", "All Tables Loaded!"):null}
          </LayoutContentWrapper>
        </div>
      );
    }else if(this.props.Table.checkCount<areas.length || this.props.Table.totalData === 0){
      return(
        <div>
          <Header totalData={0} title={title} filters={filterTypes} date={moment().format('YYYY-MM-DD').toString()}/> 
          <div style={style}> 
            <Spin size="large"/>
          </div>
        </div>
      );
    }

  }
}
function mapStateToProps(state){
  return{
    Table: state.arrivalTable,
    DateRange:state.daterange,
    Searchbar:state.searchbar
  };
}

export default connect(mapStateToProps,{renderData,initializeState,resetState,onPageChange})(ArrivalList);
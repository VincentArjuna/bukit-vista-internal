import React, { Component } from "react";
//import PageHeader from '../../components/utility/pageHeader';
//import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import LayoutContent from "../../components/utility/layoutContent";
import LayoutWrapper from '../../components/utility/layoutWrapper';
//import Box from '../../components/utility/box';
import DatePicker from '../../components/uielements/datePicker';
//import { InputSearch } from '../../bvScenes/ArrivalList/components/arrivalSearch';
import basicStyle from '../../settings/basicStyle';
import { Row, Col } from 'antd';
import AntTable from './components/antTables/';

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <LayoutContent>
          <Row style={rowStyle} gutter={gutter} justify="start">
              <h1>Arrival List</h1>
              <DatePicker />
          </Row>
        </LayoutContent>
        <AntTable/>
      </LayoutWrapper>
    );
  }
}

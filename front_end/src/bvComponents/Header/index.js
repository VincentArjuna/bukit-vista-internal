import React, { Component } from "react";
import { Row, Col,DatePicker} from 'antd';
import LayoutContentWrapper from "../Utility/layoutWrapper.js";
import LayoutContent from "../Utility/layoutContent";
import { InputSearch } from '../Searchbar/searchbar';
import CustomDatePicker from '../Datepicker/datepicker';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import basicStyle from '../../settings/basicStyle';


const Option= Select.Option;
export default class Header extends Component {
    onSearch=e=>{
        alert('#TODO');
      }
      
    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        return(
            <LayoutContentWrapper style={{ height: "27vh"}}>
            <PageHeader><h1>{this.props.title}</h1></PageHeader>
            <LayoutContent>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={6} sm={12} xs={24} style={colStyle}>
                <DatePicker/>
                </Col>
                <Col md={16} sm={12} xs={24} style={colStyle}>
                <InputSearch
                    placeholder="Search..."
                    defaultValue=""
                    onSearch={this.onSearch}
                />
                </Col>
                <Col md={2} sm={12} xs={24} style={colStyle}>
                <Select defaultValue="Filter..">
                    {this.props.columns.map(column=>(
                    <Option value={column.key}>{column.title}</Option>
                    ))}
                </Select>
                </Col>
            </Row>
            </LayoutContent>
        </LayoutContentWrapper>
        );
    }
}
import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col,DatePicker} from 'antd';
import Box from "../Utility/box";
import LayoutContentWrapper from "../Utility/layoutWrapper.js";
import LayoutContent from "../Utility/layoutContent";
import { InputSearch } from '../Searchbar/searchbar';
import DateRange from '../Datepicker/customDatePicker';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import basicStyle from '../../settings/basicStyle';
import actions from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';

const Option= Select.Option;
export default class Header extends Component {
    onSearch=value=>{
        if(this.props.title === 'Booking / Current'){
            this.props.Current.param = value;
            this.props.Current.filter = this.props.Header.filterType;
            this.props.filterDataBc(this.props.Current.param,this.props.Current.filter);
        }else if(this.props.title === 'Arrival List'){
            
        }
    }

    handleChangeSelect=value=>{
        this.props.Header.filterType=value;
        console.log(value);
    }
    handleChangeDate=(date, dateString)=>{
        this.props.Header.filterType="booking_check_in";
        this.props.Header.filterValue = dateString;

    }
      
    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        return(
            <div>
            <LayoutContent>
            <PageHeader>{this.props.title}</PageHeader>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={8} sm={12} xs={24} style={colStyle}>
                    <DateRange/>             
                </Col>
                <Col md={14} sm={12} xs={24} style={colStyle}>

                <InputSearch
                    placeholder="Search..."
                    defaultValue=""
                    onSearch={this.onSearch}
                />
                </Col>
                <Col md={2} sm={24} xs={24} style={colStyle}>
                <Select defaultValue="Filter.."
                    onChange = {this.handleChangeSelect}
                >
                    {this.props.columns.map(column=>(
                    <Option value={column.key}>{column.title}</Option>
                    ))}
                    <Option value="area">Area</Option>
                </Select>
                </Col>
            </Row>
            </LayoutContent>
            </div>
        );
    }
}




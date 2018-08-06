import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col} from 'antd';
import LayoutContent from "../Utility/layoutContent";
import Searchbar from '../Searchbar/searchbar';
import DateRange from '../DateRange/index';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import Button from '../../bvComponents/Uielements/button';
import basicStyle from '../../settings/basicStyle';
import {Input} from 'antd';
import AddBooking from './addBooking';

const Option= Select.Option;
class Header extends Component {
    handleBooking=event=>{
        alert('booking');
    }
    handleDownloadCsv=event=>{
        alert('download csv');
    }
    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        return(
            <div>
                <LayoutContent>
                <PageHeader>{this.props.title}</PageHeader>
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={7} sm={12} xs={24} style={colStyle}>
                        <DateRange title={this.props.title}/>
                    </Col>
                    <Col md={17} sm={12} xs={24} style={colStyle}>
                        <Searchbar title={this.props.title}/>
                    </Col>
                </Row>
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={6} sm={12} xs={24} style={colStyle}>
                        <h3>Total Booking : {this.props.totalData}</h3>
                    </Col>
                    <Col push={15} md={3} sm={12} xs={24} style={colStyle}>
                        {this.props.title==='Booking / Current'?
                            <AddBooking/>:
                            <Button type="primary" onClick={this.handleDownloadCsv}>Download CSV</Button>}
                    </Col>
                </Row>
                </LayoutContent>
            </div>
        );
    }
}
export default Header;




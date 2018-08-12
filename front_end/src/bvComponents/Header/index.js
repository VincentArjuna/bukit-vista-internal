import React, { Component } from "react";
import {connect} from 'react-redux';
import moment from 'moment';
import { Row, Col} from 'antd';
import LayoutContent from "../Utility/layoutContent";
import Searchbar from '../Searchbar/searchbar';
import DateRange from '../DateRange/index';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import Button from '../../bvComponents/Uielements/button';
import basicStyle from '../../settings/basicStyle';
import AddBooking from '../../bvScenes/Operation/scenes/Booking/scenes/Current/components/addBooking';
import AddListing from '../../bvScenes/MarketBuilding/scenes/Listing/components/addListing';
import AddProperty from '../../bvScenes/MarketBuilding/scenes/Property/components/addProperty';
import AddUnit from '../../bvScenes/MarketBuilding/scenes/Unit/components/addUnit';
import actions from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';

const {downloadCsv} = actions;
class Header extends Component {
    handleBooking=event=>{
        alert('booking');
    }
    handleDownloadCsv=event=>{
        if(this.props.DateRange.dateType==="0" || this.props.DateRange.dateType===0){
            this.props.downloadCsv(this.props.DateRange.date);
        }else{
            alert("Sorry, check in only");
        }
    }
    renderComponents(){
        const { rowStyle, colStyle, gutter } = basicStyle;
        if(this.props.mode==='arrivalList'||this.props.mode==='bookingCurrent'){
            return(
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={9} sm={12} xs={24} style={colStyle}>
                        <DateRange mode={this.props.mode}/>
                    </Col>
                    <Col md={15} sm={12} xs={24} style={colStyle}>
                        <Searchbar mode={this.props.mode} title={this.props.title} filters={this.props.filters}/>
                    </Col>
                </Row>
            );
        }else{
            return(
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={24} sm={12} xs={24} style={colStyle}>
                        <Searchbar mode={this.props.mode} title={this.props.title} filters={this.props.filters}/>
                    </Col>
                </Row>
            );
        }
    }
    renderButtons(){
        switch(this.props.mode){
            case "arrivalList":
                return(
                    <Button type="primary" onClick={this.handleDownloadCsv}>Download CSV</Button>
                );
            case "bookingCurrent":
                return(
                    <AddBooking/>
                );
            case "listing":
                return(
                    <AddListing/>
                );
            case "property":
                return(
                    <AddProperty/>
                );
            case "unit":
                return(
                    <AddUnit/>
                );
            default:
                return;

        }
    }
    renderInfo(){
        switch(this.props.mode){
            case "arrivalList":
                return(
                    <h3 className="isoComponentTitle">Total Booking(s) Today : {this.props.totalData}</h3>
                );
            case "bookingCurrent":
                return(
                    <h3 className="isoComponentTitle">Total Booking(s) : {this.props.total}</h3>
                );
            case "listing":
                return(
                    <h3 className="isoComponentTitle">Total Listing(s) : {this.props.total}</h3>
                );
            default:
                return;
        }
    }
    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        return(
            <div>
                <LayoutContent>
                <PageHeader>{this.props.title}</PageHeader>
                    {this.renderComponents()}
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={6} sm={12} xs={24} style={colStyle}>
                        {this.renderInfo()}
                    </Col>
                    <Col push={15} md={3} sm={12} xs={24} style={colStyle}>
                        {this.renderButtons()}
                    </Col>
                </Row>
                </LayoutContent>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        DateRange:state.daterange
    }
}
export default connect(mapStateToProps,{downloadCsv})(Header);




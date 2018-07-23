import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col,DatePicker} from 'antd';
import LayoutContentWrapper from "../Utility/layoutWrapper.js";
import LayoutContent from "../Utility/layoutContent";
import { InputSearch } from '../Searchbar/searchbar';
import CustomDatePicker from '../Datepicker/datepicker';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import basicStyle from '../../settings/basicStyle';
import actions from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import aT1 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/table1/actions';
import aT2 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/table2/actions';
import aT3 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/table3/actions';
import aT4 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/table4/actions';
import aT5 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/table5/actions';

const {filterDataBc} = actions;
const {renderData1} = aT1;
const {renderData2} = aT2;
const {renderData3} = aT3;
const {renderData4} = aT4;
const {renderData5} = aT5;

const Option= Select.Option;
class Header extends Component {
    onSearch=value=>{
        if(this.props.title === 'Booking / Current'){
            alert("okay");
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
        if(this.props.title === 'Booking / Current'){
            this.props.filterDataBc(this.props.Header.filterValue,this.props.Header.filterType);
        }else{
            this.props.renderData1('A0001',this.props.Header.filterValue);
            this.props.renderData2('A0002',this.props.Header.filterValue);
            this.props.renderData3('A0003',this.props.Header.filterValue);
            this.props.renderData4('A0004',this.props.Header.filterValue);
            this.props.renderData5('A0005',this.props.Header.filterValue);
        }

    }
    componentWillMount(){

    }
      
    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        return(
            <LayoutContentWrapper style={{ height: "27vh"}}>
            <PageHeader><h1>{this.props.title}</h1></PageHeader>
            <LayoutContent>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={6} sm={12} xs={24} style={colStyle}>
                <DatePicker onChange={this.handleChangeDate}/>
                </Col>
                <Col md={16} sm={12} xs={24} style={colStyle}>
                <InputSearch
                    placeholder="Search..."
                    defaultValue=""
                    onSearch={this.onSearch}
                />
                </Col>
                <Col md={2} sm={12} xs={24} style={colStyle}>
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
        </LayoutContentWrapper>
        );
    }
}

function mapStateToProps(state){
    return{
        Header:state.header,
        Current:state.bookingCurrent,
        Table1:state.table1,
        Table2:state.table2,
        Table3:state.table3,
        Table4:state.table4,
        Table5:state.table5,
    };
}

export default connect(mapStateToProps,
    {filterDataBc,renderData1,renderData2,renderData3,renderData4,renderData5})(Header);

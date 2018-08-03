import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col} from 'antd';
import LayoutContent from "../Utility/layoutContent";
import { InputSearch } from '../Searchbar/searchbar';
import DateRange from '../DateRange/index';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import Button from '../../bvComponents/Uielements/button';
import basicStyle from '../../settings/basicStyle';

/**
 ** Here comes the tables...
 */
import actions from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import aT1 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/table1/actions';
import aT2 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/table2/actions';
import aT3 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/table3/actions';
import aT4 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/table4/actions';
import aT5 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/table5/actions';
import aT6 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table6/redux/table6/actions';
import aT7 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table7/redux/table7/actions';
import aT8 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table8/redux/table8/actions';
import aT9 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table9/redux/table9/actions';
import aT10 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table10/redux/table10/actions';
import aT11 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table11/redux/table11/actions';
import aT12 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table12/redux/table12/actions';
import aT13 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table13/redux/table13/actions';
import aT14 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table14/redux/table14/actions';
import aT15 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table15/redux/table15/actions';
import aT16 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table16/redux/table16/actions';
import aT17 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table17/redux/table17/actions';
import aT18 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table18/redux/table18/actions';
import aT19 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table19/redux/table19/actions';
import aT20 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table20/redux/table20/actions';
import aT21 from '../../bvScenes/Operation/scenes/ArrivalList/components/Table21/redux/table21/actions';

const {renderDataBc} = actions;
const {renderData1} = aT1;
const {renderData2} = aT2;
const {renderData3} = aT3;
const {renderData4} = aT4;
const {renderData5} = aT5;
const {renderData6} = aT6;
const {renderData7} = aT7;
const {renderData8} = aT8;
const {renderData9} = aT9;
const {renderData10} = aT10;
const {renderData11} = aT11;
const {renderData12} = aT12;
const {renderData13} = aT13;
const {renderData14} = aT14;
const {renderData15} = aT15;
const {renderData16} = aT16;
const {renderData17} = aT17;
const {renderData18} = aT18;
const {renderData19} = aT19;
const {renderData20} = aT20;
const {renderData21} = aT21;

/**
 ** End
 */

const Option= Select.Option;
class Header extends Component {
    state={
        searchValue:''
    }
    onSearch=value=>{
        //event.preventDefault();
        
        if(value === ''){
            alert("Please enter a value");
        }else{
            if(this.props.DateRange.check_in===null && this.props.DateRange.check_out===null){
                this.props.DateRange.check_in=this.props.date;
            }
            if(this.props.Header.filterType===null){
                alert("Please select a filter");
            }else{
                if(this.props.DateRange.range===true){
                    this.props.Header.dateType=3;
                }else{
                    if(this.props.DateRange.check_in !=null){
                        this.props.Header.date = this.props.DateRange.check_in;
                        this.props.Header.dateType= 0
                    }else{
                        this.props.Header.date = this.props.DateRange.check_out;
                        this.props.Header.dateType=1;
                    }
                }

                if(this.props.title === 'Booking / Current'){
                    if(this.props.DateRange.check_in === null && this.props.DateRange.check_out===null){
                        this.props.Header.dateType=0;
                    }else{
                        if(this.props.DateRange.check_in !=null){
                            this.props.Header.date = this.props.DateRange.check_in;
                            this.props.Header.dateType= 1;
                        }else{
                            this.props.Header.date = this.props.DateRange.check_out;
                            this.props.Header.dateType=2;
                        }

                        if(this.props.DateRange.range===true){
                            this.props.Header.dateType=3;
                        }
                    }
                    //alert("date :"+this.props.Header.date);
                    //alert("dateType :"+this.props.Header.dateType);
                    //alert("filterType : "+this.props.Header.filterType);
                    //alert("value : "+value);
                    this.props.renderDataBc(this.props.Header.date,value,this.props.Header.dateType,this.props.Header.filterType);
                }else if(this.props.title === 'Arrival List'){
                    this.props.renderData1('A0001',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData2('A0002',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData3('A0003',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData4('A0004',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData5('A0005',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData6('A0006',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData7('A0007',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData8('A0008',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData9('A0009',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData10('A0010',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData11('A0011',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData12('A0012',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData13('A0013',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData14('A0014',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData15('A0015',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData16('A0016',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData17('A0017',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData18('A0018',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData19('A0019',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData20('A0020',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.props.renderData21('A0021',this.props.Header.date,this.props.Header.filterType,value,this.props.Header.dateType);
                    this.setState({searchValue: ''});
                }
            }
        }
    }

    handleChangeSelect=value=>{
        this.props.Header.filterType=value;
    }
    onInput=event=> {
        this.setState({searchValue: event.target.value});
    }
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
                <Col md={8} sm={12} xs={24} style={colStyle}>
                    <DateRange title={this.props.title}/>             
                </Col>
                <Col md={14} sm={12} xs={24} style={colStyle}>

                <InputSearch
                    placeholder="Search..."
                    onSearch={this.onSearch.bind(this)}
                    onChange={this.onInput.bind(this)}
                />

                </Col>
                <Col md={2} sm={24} xs={24} style={colStyle}>
                <Select defaultValue="Filter.."
                    onChange = {this.handleChangeSelect}
                >
                    {this.props.filters.map((filter)=>(
                        <Option value={filter.key}>{filter.name}</Option>
                    ))}
                </Select>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={21} style={colStyle}>
                </Col>
                <Col md={3} sm={12} xs={24} style={colStyle}>
                    {this.props.title=='Booking / Current'?
                        <Button type="primary" onClick={this.handleBooking}>Add Booking</Button> :
                        <Button type="primary" onClick={this.handleDownloadCsv}>Download CSV</Button>}
                </Col>
            </Row>
            </LayoutContent>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        ...state,
        Header :state.header,
        DateRange:state.daterange,
        Current:state.bookingCurrent,
        Table1:state.table1,
        Table2:state.table2,
        Table3:state.table3,
        Table4:state.table4,
        Table5:state.table5,
        Table6:state.table6,
        Table7:state.table7,
        Table8:state.table8,
        Table9:state.table9,
        Table10:state.table10,
        Table11:state.table11,
        Table12:state.table12,
        Table13:state.table13,
        Table14:state.table14,
        Table15:state.table15,
        Table16:state.table16,
        Table17:state.table17,
        Table18:state.table18,
        Table19:state.table19,
        Table20:state.table20,
        Table21:state.table21,
    };
  }
  export default connect(
    mapStateToProps,
    {renderDataBc,
        renderData1,
        renderData2,
        renderData3,
        renderData4,
        renderData5,
        renderData6,
        renderData7,
        renderData8,
        renderData9,
        renderData10,
        renderData11,
        renderData12,
        renderData13,
        renderData14,
        renderData15,
        renderData16,
        renderData17,
        renderData18,
        renderData19,
        renderData20,
        renderData21,
    }
  )(Header);




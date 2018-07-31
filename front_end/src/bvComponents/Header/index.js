import React, { Component } from "react";
import {connect} from 'react-redux';
import { Row, Col} from 'antd';
import LayoutContent from "../Utility/layoutContent";
import { InputSearch } from '../Searchbar/searchbar';
import DateRange from '../DateRange/index';
import PageHeader from "../Utility/pageHeader";
import { Select } from 'antd';
import basicStyle from '../../settings/basicStyle';

const Option= Select.Option;
class Header extends Component {
    onSearch=value=>{
        if(this.props.DateRange.check_in===null && this.props.DateRange.check_out===null){
            this.props.DateRange.check_in=this.props.date;
        }
        if(value === ''){
            alert("Please enter a value");
        }else{
            if(this.props.Header.filterType===null){
                alert("Please select a filter");
            }else{
                if(this.props.DateRange.range==true){
                    this.props.Header.dateType=2;
                }else{
                    this.props.DateRange.check_in!=null ? this.props.Header.dateType= 0 : this.props.Header.dateType=1;
                }

                if(this.props.title === 'Booking / Current'){
                    this.props.filterDataBc(this.props.Header.filterType,this.props.Header.filterValue);
                }else if(this.props.title === 'Arrival List'){
                    
                }
            }
        }
    }

    handleChangeSelect=value=>{
        this.props.Header.filterType=value;
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
                    onSearch={this.onSearch}
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
            </LayoutContent>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        Header :state.header,
        DateRange:state.daterange,
    };
  }
  export default connect(
    mapStateToProps,
  )(Header);




import React, { Component } from "react";
import {connect} from 'react-redux';
import { DatePicker } from 'antd';
import { applyToNamespaceRoots } from "../../../node_modules/redux-subspace";

class DateRange extends Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
    if(field ==='startValue'){
      this.props.DateRange.range=false;
      this.props.DateRange.check_in=value
    } else{
      this.props.DateRange.check_out=value;
    }
  }
//check_in
  onStartChange = (value) => {
    this.onChange('startValue', value);
    if(this.props.title==='Arrival List'){
      this.props.DateRange.check_out=null;
      let temp = 'endValue';
      this.setState({
        [temp]:null
      })
    }
  }
//check_out
  onEndChange = (value) => {
    this.onChange('endValue', value);
    if(this.props.title==='Arrival List'){
      this.props.DateRange.check_in=null;
      let temp = 'startValue';
      this.setState({
        [temp]:null
      })
    }
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true});
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
    this.props.DateRange.check_in !== null ? this.props.DateRange.range=true:null;
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
      {this.props.title==='Booking' ?
        (<DatePicker
        disabledDate={this.disabledStartDate}
        format="YYYY-MM-DD"
        value={this.state.startValue}
        placeholder="Check In"
        onChange={this.onStartChange}
        onOpenChange={this.handleStartOpenChange}
        />) :
        (<DatePicker
        disabledDate={this.disabledStartDate}
        format="YYYY-MM-DD"
        value={this.state.startValue}
        placeholder="Check In"
        onChange={this.onStartChange}
        />)}
        <DatePicker
          disabledDate={this.disabledEndDate}
          format="YYYY-MM-DD"
          value={endValue}
          placeholder="Check Out"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { 
      DateRange:state.daterange,
  };
}
export default connect(
  mapStateToProps,
)(DateRange);
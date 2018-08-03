import React, { Component } from "react";
import {connect} from 'react-redux';
import moment from 'moment';
import { DatePicker } from 'antd';

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


class DateRange extends Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
    pickDate:null,
    mode:0
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
      if(value != null){
        this.props.DateRange.check_in=value.format('YYYY-MM-DD');
        this.setState({pickDate:this.props.DateRange.check_in,mode:0});
      }
    } else{
      if(value != null){
        this.props.DateRange.check_out=value.format('YYYY-MM-DD');
        this.setState({pickDate:this.props.DateRange.check_out,mode:1});
      }
    }
    if(this.props.title==='Arrival List'){
      this.props.renderData1('A0001',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData2('A0002',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData3('A0003',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData4('A0004',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData5('A0005',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData6('A0006',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData7('A0007',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData8('A0008',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData9('A0009',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData10('A0010',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData11('A0011',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData12('A0012',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData13('A0013',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData14('A0014',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData15('A0015',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData16('A0016',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData17('A0017',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData18('A0018',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData19('A0019',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData20('A0020',this.state.pickDate,0,null,this.state.mode);
      this.props.renderData21('A0021',this.state.pickDate,0,null,this.state.mode);    
    }else{
      this.props.renderDataBc(this.state.pickDate,null,this.state.mode+1,0);
    }
  }

  handleOnChange=()=>{
    
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
    this.props.DateRange.check_in !== null ? this.props.DateRange.range=true:this.props.DateRange.range=false;
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
    renderData21}
)(DateRange);
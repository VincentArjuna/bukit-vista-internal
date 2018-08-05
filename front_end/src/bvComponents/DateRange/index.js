import React, { Component } from "react";
import {connect} from 'react-redux';
import moment from 'moment';
import { DatePicker } from 'antd';
import {Select,Input} from 'antd';
import actions from '../../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/arrivalTable/actions';
import {areas} from '../../bvScenes/Operation/scenes/ArrivalList/config';
const Option= Select.Option;
const Group = Input.Group;
const {renderData} = actions;
class DateRange extends Component {
  onChange = (value) => {
    this.props.DateRange.date=value.format('YYYY-MM-DD').toString();
    this.renderChange();
  }
  handleChangeDateMode=(value)=>{
    this.props.DateRange.dateType = value;
    this.renderChange();
  }
  renderChange=()=>{
    this.props.Table.checkCount=0;
    this.props.Table.totalData=0;
    const areasLen = areas.length;
    areas.map((area,i)=>{
      areasLen === i ? this.props.renderData(i,area.code,this.props.DateRange.date,0,null,this.props.DateRange.dateType):this.props.renderData(area.key,area.code,this.props.DateRange.date,0,null,this.props.DateRange.dateType);
    });
  }

  render() {
    return (
      <div>
        <Group compact>
          <DatePicker
            format="YYYY-MM-DD"
            value={moment(this.props.DateRange.date,'YYYY-MM-DD')}
            onChange={this.onChange}
          />
          <Select defaultValue={this.props.DateRange.dateType.toString()} onChange={this.handleChangeDateMode}>
            <Option value="0">
              Check In
            </Option>
            <Option value="1">
              Check Out
            </Option>
            <Option value="2">
              In House
            </Option>
          </Select>
        </Group>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    DateRange:state.daterange,
    Table:state.arrivalTable,
  };
}
export default connect(mapStateToProps,{renderData})(DateRange);
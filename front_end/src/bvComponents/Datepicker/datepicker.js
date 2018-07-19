import React, { Component } from "react";
import { DatePicker, Radio ,Dropdown,Button} from 'antd';

const { MonthPicker } = DatePicker;
class CustomDatePicker extends Component{
    state = {
        mode:'Date'
    };
    YearDropDown(){
        return(
            <div>
                Banana
            </div>
        );
    }
    renderCustomDatePicker(){
        let mode = this.state.mode;
        let Component;
        switch(mode){
            case 'Month':
                this.Component = MonthPicker;
                break;
            case 'Year':
                Component = this.YearDropDown();
                break;
            case 'Date':
                this.Component = DatePicker;
                break;
            default:
                Component = DatePicker;
        }
        return <Component/>;
    }
  handleModeChange = (e) => {
    this.setState({ mode: e.target.value });
    //this.renderCustomDatePicker(this.state.mode);
  }

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group value={'Date'} onChange={this.handleModeChange}>
          <Radio.Button value="Year">Year</Radio.Button>
          <Radio.Button value="Month">Month</Radio.Button>
          <Radio.Button value="Date">Date</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}
export default CustomDatePicker;

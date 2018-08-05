import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Select,Input,Icon} from 'antd';

import actions from '../../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/arrivalTable/actions';
import {areas} from '../../bvScenes/Operation/scenes/ArrivalList/config';
const Option= Select.Option;
const {renderData} = actions;
class Searchbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
          searchFilter: "",
          searched:false,
        };
      }
    
      onChangeSearch = e => {
        this.setState({
          searchFilter: e.target.value,
          searched:true
        });
        this.props.Searchbar.filterer=e.target.value;
        if(this.props.Searchbar.filterer===""){
          this.renderChange();
        }
      };

      renderChange=()=>{
        this.props.Table.checkCount=0;
        this.props.Table.totalData=0;
        const areasLen = areas.length;
        areas.map((area,i)=>{
          areasLen === i ? this.props.renderData(i,area.code,this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType)
          :this.props.renderData(area.key,area.code,this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType);
        });
      }
      // handleBlur = e => {
      //   console.log("triggered");
      //   if (e.target.value === "" && this.state.searched) {
      //       alert("not commencing search");
      //       this.setState({
      //           searched:false
      //       })
      //       this.props.Searchbar.filterer=null;
      //       this.renderChange();
      //   }
      // };
      handleChangeFilterMode=(value)=>{
        this.props.Searchbar.filterType = value;
        this.renderChange();
      }
      handleSearch=e=>{
        if(e.key==="Enter" && (this.props.Searchbar.filterer!== null || this.props.Searchbar.filterer!== "")){
          this.renderChange();
        }
      }
      render() {
        const { searchFilter } = this.state;
        const selectAfter = (
          <Select defaultValue={this.props.Searchbar.filterType.toString()} style={{ width: 80 }}
            onChange={this.handleChangeFilterMode}>
            <Option value="1">Guest Name</Option>
            <Option value="2">Unit Name</Option>
            <Option value="3">Profile</Option>
          </Select>
        );
        return (
          <div>
            <Input
              placeholder="Search..."
              suffix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={searchFilter}
              onChange={this.onChangeSearch}
              onBlurCapture={this.handleBlur}
              addonAfter={selectAfter}
              onKeyPress={this.handleSearch}
            />
          </div>
        );
      }
}
function mapStateToProps(state){
  return{
    Searchbar:state.searchbar,
    DateRange:state.daterange,
    Table:state.arrivalTable
  };
}
export default connect(mapStateToProps,{renderData})(Searchbar);

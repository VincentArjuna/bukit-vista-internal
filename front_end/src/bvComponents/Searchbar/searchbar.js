import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Select,Input,Icon} from 'antd';

import actions from '../../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/arrivalTable/actions';
import aBooking from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import aListing from '../../bvScenes/MarketBuilding/scenes/Listing/redux/listing/actions';
import {areas} from '../../bvScenes/Operation/scenes/ArrivalList/config';
const Option= Select.Option;
const {renderData} = actions;
const {renderDataBc}=aBooking;
const {renderDataListing}=aListing;
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
          let temp = this.props.Searchbar.filterType;
          this.props.Searchbar.filterType=0;
          this.renderChange();
          this.props.Searchbar.filterType=temp;
        }
      };

      renderChange=()=>{
        switch(this.props.mode){
          case "arrivalList":
            this.props.Table.checkCount=0;
            this.props.Table.totalData=0;
            const areasLen = areas.length;
            areas.map((area,i)=>{
              areasLen === i ? 
              this.props.renderData(i,area.code,this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType)
              :this.props.renderData(area.key,area.code,this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType);
            });
          case "bookingCurrent":
            this.props.renderDataBc(
            this.props.DateRange.date,
            this.props.Searchbar.filterer,
            this.props.DateRange.dateType,
            this.props.Searchbar.filterType
            );
          case "listing":
            this.props.renderDataListing(
              this.props.Searchbar.filterType,
              this.props.Searchbar.filterer,
              10
            );
            
          default:
            return;
        }
      }
      
      handleChangeFilterMode=(value)=>{
        this.props.Searchbar.filterType = value;
      }
      handleSearch=e=>{
        if(e.key==="Enter" && (this.props.Searchbar.filterer!== null || this.props.Searchbar.filterer!== "")){
          this.renderChange();
        }
      }
      render() {
        let selectAfter=(
            <Select defaultValue={this.props.Searchbar.filterType.toString()} style={{ width: 150}}
            onChange={this.handleChangeFilterMode}>
              {this.props.filters.map(d => <Option value={d.key}>{d.name}</Option>)}
            </Select>
        );
        return (
          <div>
            <Input
              placeholder="Search..."
              suffix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={this.props.Searchbar.filterer}
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
export default connect(mapStateToProps,{renderData,renderDataBc,renderDataListing})(Searchbar);

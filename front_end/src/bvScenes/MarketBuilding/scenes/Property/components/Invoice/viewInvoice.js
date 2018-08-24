import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DatePicker} from 'antd';
import moment from 'moment';
import Button from '../../../../../../bvComponents/Uielements/button';
import LayoutContent from "../../../../../../bvComponents/Utility/layoutContent";
import { ViewTable } from '../Table/invoiceTable';
import InvoicePageWrapper from './singleInvoice.style';
import {columnsPropertyUnit} from '../../../Unit/config';
import {columnsPropertyBooking} from '../../../../../../bvScenes/Operation/scenes/Booking/scenes/Current/config';
import aUnit from '../../../Unit/redux/unit/actions';
import aBooking from '../../../../../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import AddUnit from '../../../../../../bvScenes/MarketBuilding/scenes/Unit/components/addUnit';
import EditProperty from '../editProperty';

const {MonthPicker}=DatePicker;
const {renderDataUnit}=aUnit;
const {renderDataMonthlyBc,downloadCsvMonthly}=aBooking;
class ViewInvoice extends Component {
  constructor(props){
    super(props);
    this.state={
      date:null
    }
  }
  changer(value,index){

  }
  componentDidMount(){
    this.setState({
      date:moment().format('YYYY-MM')
    });
    this.props.renderDataUnit(3,this.props.dataList[this.props.index].property_id,10)
    this.props.renderDataMonthlyBc(moment().format('YYYY-MM').toString(),this.props.dataList[this.props.index].property_id);

  }
  onChange=(date,dateString)=>{
    console.log(dateString);
    this.setState({
      date:dateString
    });
    this.props.renderDataMonthlyBc(dateString,this.props.dataList[this.props.index].property_id);
    this.setState({
      date:dateString
    });
  }
  render() {
    const { dataList,index } = this.props;
    const property=dataList[index];
    return (
          <InvoicePageWrapper className="InvoicePageWrapper">
            <div className="PageHeader">
                <EditProperty dataList={dataList} index={index}/>
            </div>
            <div className="PageContent">
              <div className="OrderInfo">
                  
                <div className="LeftSideContent">
                <h3 className="Title">Details</h3>
                  <p>
                    <span className="orderStatusSpan"><b>ID : </b></span>
                    <span className="InvoiceNumber">{property.property_id}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Name : </b></span>
                    <span className="orderStatus">{property.property_name}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Area : </b></span>
                    <span className="orderStatus">{property.area_id}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Status : </b></span>
                    <span className="orderStatus">{property.property_status}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Employee : </b></span>
                    <span className="orderStatus">{property.employee_id}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Owner Group Link : </b></span>
                    <span className="orderStatus">{property.property_owner_group_link}</span>
                  </p>
                </div>
                <div className="RightSideContent">
                <h3 className="Title">Facilities</h3>
                  <p>
                    <span className="orderStatusSpan"><b>Type : </b></span>
                    <span className="orderStatus">{property.property_type}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Package : </b></span>
                    <span className="orderStatus">{property.property_package}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Design : </b></span>
                    <span className="orderStatus">{property.property_design}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Proximity : </b></span>
                    <span className="orderStatus">{property.property_proximity}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Life Support : </b></span>
                    <span className="orderStatus">{property.property_life_support}</span>
                  </p>
                  <p>
                    <span className="orderStatusSpan"><b>Property Service : </b></span>
                    <span className="orderStatus">{property.property_service}</span>
                  </p>
                </div>
              </div>
              <div className="OrderInfo">
                <h3 className="Title">Units</h3>
                <div className="PageHeader">
                  <AddUnit isProperty={true} propId={property.property_id} propName={property.property_name}/>
                </div>
                <div style={{paddingTop:"30px"}}>
                  <LayoutContent>
                    <ViewTable page={this.props.Unit.page} columns={columnsPropertyUnit} dataList={this.props.Unit.results} total={this.props.Unit.total}/>
                  </LayoutContent>
                </div>
              </div>
              <div className="OrderInfo">
                <h3 className="Title">Bookings</h3>
                <div className="PageHeader">
                  <MonthPicker onChange={this.onChange} defaultValue={this.state.date}/>
                  <Button color="primary" onClick={() => this.props.downloadCsvMonthly(this.state.date.toString(),property.property_id,property.property_name)}>
                    <span>Download CSV</span>
                  </Button>
                </div>
                <div style={{paddingTop:"30px"}}>
                  <LayoutContent>
                    <ViewTable page={this.props.Booking.page} columns={columnsPropertyBooking} dataList={this.props.Booking.results} total={this.props.Booking.total}/>
                  </LayoutContent>
                </div>
              </div>
            </div>
          </InvoicePageWrapper>
    );
  }
}

function mapStateToProps(state){
  return{
    Unit:state.unit,
    Property:state.property,
    Booking:state.bookingCurrent
  }
}
export default connect(mapStateToProps,{renderDataUnit,renderDataMonthlyBc,downloadCsvMonthly})(ViewInvoice);

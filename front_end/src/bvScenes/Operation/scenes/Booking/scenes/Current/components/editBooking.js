import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import debounce from 'lodash/debounce';
import {Modal, Form, Input,InputNumber, Radio ,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../../../bvComponents/Uielements/select';
import Spin from '../../../../../../../bvComponents/Uielements/spin';
import aBooking from '../../../../../../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import aListing from '../../../../../../../bvScenes/MarketBuilding/scenes/Listing/redux/listing/actions';
import { message } from 'antd';
import MessageContent from "../../../../../../../bvComponents/Message/message.style";
const FormItem = Form.Item;
const Option = SelectOption;

const {editAllBooking,onPageChange}=aBooking;
const{renderDataListing}=aListing;
const CollectionCreateForm = Form.create()(
class extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchUnit=debounce(this.handleSearchListing,800);
        this.state={
            dataListing:[],
            valueListing:null,
        }
    }

    handleChangeListing=(value)=>{
        this.setState({
            valueListing:value,
            dataListing:[]
        })
    }
    handleSearchListing=(value)=>{
        this.props.renderDataListing(2,value,30)

    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Booking"
          okText="Edit"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form layout="vertical">
            <FormItem label="ID">
                {getFieldDecorator(
                    'booking_id', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_id
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Status">
                {getFieldDecorator(
                    'status', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_status
                    }
                )(
                    <Select>
                        <Option value={1}>Confirmed Booking</Option> 
                        <Option value={2}>Cancellation</Option>
                        <Option value={3}>Hold</Option>
                        <Option value={4}>Overbooking</Option>
                        <Option value={5}>Amendment</Option>
                        <Option value={6}>Alteration</Option>
                        <Option value={7}>Decline</Option>
                        <Option value={8}>Awaiting Payment</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Guest Name">
                {getFieldDecorator(
                    'name', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_guest_name
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Check In">
                {getFieldDecorator(
                    'check_in', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:moment(this.props.dataList[this.props.index].booking_check_in,'YYYY-MM-DD')
                    }
                )(<DatePicker/>)}
            </FormItem>
            <FormItem label="Check Out">
                {getFieldDecorator(
                    'check_out', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:moment(this.props.dataList[this.props.index].booking_check_out,'YYYY-MM-DD')
                    }
                )(<DatePicker/>)}
            </FormItem>
            <FormItem label="Guest Number">
                {getFieldDecorator(
                    'number', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_guest_number?this.props.dataList[this.props.index].booking_guest_number:null
                    }
                )(<InputNumber/>)}
            </FormItem>
            <FormItem label="Guest Phone">
                {getFieldDecorator(
                    'phone', {
                        initialValue:this.props.dataList[this.props.index].booking_guest_phone?this.props.dataList[this.props.index].booking_guest_phone:null
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Guest ETA">
                {getFieldDecorator(
                    'eta', {
                        initialValue:this.props.dataList[this.props.index].booking_guest_eta !== "Invalid date"?moment(this.props.dataList[this.props.index].booking_guest_eta,'HH:mm'):null
                    }
                )(<TimePicker format="HH:mm"/>)}
            </FormItem>
            <FormItem label="Communication Channel">
                {getFieldDecorator(
                    'comm', {
                        initialValue:this.props.dataList[this.props.index].booking_comm_channel?this.props.dataList[this.props.index].booking_comm_channel:null
                    }
                )(
                    <Select>
                        <Option value={1}>Whatsapp</Option>
                        <Option value={2}>Booking.com</Option>
                        <Option value={3}>WeChat</Option>
                        <Option value={4}>Booking.com</Option>
                        <Option value={5}>Agoda</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Earned">
                {getFieldDecorator(
                    'earned', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_earned
                    }
                )(<InputNumber />)}
            </FormItem>
            <FormItem label="Currency">
                {getFieldDecorator(
                    'currency', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_currency
                    }
                )(
                    <Select>
                        <Option value={1}>IDR</Option>
                        <Option value={2}>USD</Option>
                     </Select>
                )}
            </FormItem>
            <FormItem label="Listing">
                {getFieldDecorator(
                    'listing_id', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].listing_id                       
                    }
                )(
                <Select
                    showSearch
                    placeholder="Select listing"
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={this.handleSearchListing}
                    onChange={this.handleChangeListing}
                    notFoundContent={this.props.Listing.fetching ? <Spin size="small" /> : null}
                >
                    {this.props.Listing.results.map(d => <Option value={d.listing_id}>{d.listing_id+'-'+d.listing_name}</Option>)}
                </Select>
                )}
            </FormItem>

            <FormItem label="Source">
                {getFieldDecorator(
                    'source', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].booking_source
                    }
                )(
                    <Select>
                        <Option value={1}>Airbnb</Option>
                        <Option value={2}>Traveloka</Option>
                        <Option value={3}>Booking.com</Option>
                        <Option value={4}>Agoda</Option>
                        <Option value={5}>Direct</Option>
                     </Select>
                )}
            </FormItem>
            <FormItem label="Conversation URL">
                {getFieldDecorator(
                    'conversation', {
                        initialValue:this.props.dataList[this.props.index].booking_conversation_url
                    }
                )(<Input/>)}
            </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class EditBooking extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.editAllBooking(
          values["booking_id"],
          values["status"],
          values["name"],
          moment(values["check_in"]).format('YYYY-MM-DD').toString(),
          moment(values["check_out"]).format('YYYY-MM-DD').toString(),
          values["number"]!==null?values["number"]:"",
          values["phone"]===null?"":values["phone"],
          values["eta"]!=="Invalid date"||values["eta"]!==null?moment(values["eta"],'HH:mm').toString():"",
          values["comm"]!==undefined||values["comm"]!==null?values["comm"]:"",
          values["earned"],
          values["currency"],
          values["source"],
          values["conversation"]!==null?values["conversation"]:"",
          values["listing_id"],
        );

      form.resetFields();
      this.setState({ visible: false });;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.Current.message === "success"){
        console.log("success kepanggil")
        message.success(<MessageContent>Booking successfully edited!</MessageContent>,3);
        this.props.onPageChange(
            this.props.DateRange.date,
            this.props.Searchbar.filterer,
            this.props.DateRange.dateType,
            this.props.Searchbar.filterType,
            this.props.Current.page
          );
      }
      if(nextProps.Current.message === "error"){
        console.log("error kepanggil")
        message.error(<MessageContent>Fail to edit booking</MessageContent>,3);
      }
  }

  render() {
    return (
      <div>
        <Button type="primary"  onClick={this.showModal}>Edit Booking</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          dataList={this.props.dataList}
          index={this.props.index}
          Listing={this.props.Listing}
          renderDataListing={this.props.renderDataListing}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Current:state.bookingCurrent,
    Searchbar:state.searchbar,
    DateRange:state.daterange,
    Listing:state.listing,
  };
}
export default connect(
  mapStateToProps,
  { renderDataListing,editAllBooking,onPageChange}
)(EditBooking);

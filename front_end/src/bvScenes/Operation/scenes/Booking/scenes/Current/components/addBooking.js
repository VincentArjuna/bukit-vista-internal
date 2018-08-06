import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Modal, Form, Input,InputNumber, Radio ,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../../../bvComponents/Uielements/select';
import actions from '../../../../../../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/editCell/actions';
import aBooking from '../../../../../../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import aListing from '../../../../../../../bvScenes/MarketBuilding/scenes/Listing/redux/listing/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {renderDataEmployee,editBooking,editBookingEmployee} = actions;
const {renderDataBc,addBooking}=aBooking;
const{renderDataListing}=aListing;
const CollectionCreateForm = Form.create()(
class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add Button"
          okText="Add"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form layout="vertical">
            <FormItem label="Booking ID">
                {getFieldDecorator(
                    'booking_id', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Guest Name">
                {getFieldDecorator(
                    'guest_name', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Check In">
                {getFieldDecorator(
                    'check_in', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<DatePicker/>)}
            </FormItem>
            <FormItem label="Check Out">
                {getFieldDecorator(
                    'check_out', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<DatePicker/>)}
            </FormItem>
            <FormItem label="Guest Number">
                {getFieldDecorator(
                    'number', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<InputNumber/>)}
            </FormItem>
            <FormItem label="Guest Phone">
                {getFieldDecorator(
                    'phone'
                )(<Input/>)}
            </FormItem>
            <FormItem label="Guest ETA">
                {getFieldDecorator(
                    'eta'
                )(<TimePicker format="HH:mm"/>)}
            </FormItem>
            <FormItem label="Communication Channel">
                {getFieldDecorator(
                    'comm'
                )(
                    <Select>
                        <Option value={0}>Whatsapp</Option>
                        <Option value={1}>Booking.com</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Earned">
                {getFieldDecorator(
                    'earned', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<InputNumber />)}
            </FormItem>
            <FormItem label="Currency">
                {getFieldDecorator(
                    'currency', {
                        rules: [{ required: true, message: 'This is required' }]
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
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select>
                        {this.props.listings.map(listing=>
                            <Option value={listing.listing_id}>{listing.listing_name}</Option>
                        )}
                    </Select>
                )}
            </FormItem>
            <FormItem label="Source">
                {getFieldDecorator(
                    'source', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select>
                        <Option value={1}>Airbnb</Option>
                        <Option value={2}>Traveloka</Option>
                     </Select>
                )}
            </FormItem>
            <FormItem label="Conversation URL">
                {getFieldDecorator(
                    'conversation'
                )(<Input/>)}
            </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class AddBooking extends Component {
  state = {
    visible: false,
    listing:{}
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
      console.log(values);
      this.props.addBooking(
          moment(values["check_in"]).format('YYYY-MM-DD').toString(),
          moment(values["check_out"]).format('YYYY-MM-DD').toString(),
          (values["comm"]!==undefined?values["comm"]:""),
          values["currency"],
          values["earned"],
          (values["eta"]!==undefined?moment(values["eta"]).format('HH:mm').toString():""),
          values["guest_name"],
          values["number"],
          (values["phone"]!==undefined?values["phone"]:""),
          values["booking_id"],
          values["listing_id"],
          values["source"],
          (values["conversation"]!==undefined?values["conversation"]:"")
        );
      form.resetFields();
      this.setState({ visible: false });;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.renderDataBc(0,0,0,0);
    this.props.renderDataListing();

  }
  render() {
    return (
      <div>
        <Button  onClick={this.showModal}>Add Booking</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          dataList={this.props.Current.results}
          index={this.props.index}
          listings={this.props.Listing.results}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    EditCell: state.editCell,
    Current:state.bookingCurrent,
    Searchbar:state.searchbar,
    DateRange:state.daterange,
    Listing:state.listing,
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,editBooking,editBookingEmployee,renderDataBc,renderDataListing,addBooking}
)(AddBooking);

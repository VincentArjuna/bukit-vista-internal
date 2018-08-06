import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Modal, Form, Input,InputNumber, Radio ,TimePicker,DatePicker} from 'antd';
import Button from '../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../bvComponents/Uielements/select';
import actions from '../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/editCell/actions';
import aBooking from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import { getFileItem } from '../../../node_modules/antd/lib/upload/utils';
const FormItem = Form.Item;
const Option = SelectOption;

const {renderDataEmployee,editBooking,editBookingEmployee} = actions;
const {renderDataBc}=aBooking;
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
                    'booking_id'
                )(<Input/>)}
            </FormItem>
            <FormItem label="Guest Name">
                {getFieldDecorator(
                    'booking_guest_name'
                )(<Input/>)}
            </FormItem>
            <FormItem label="Check In">
                {getFieldDecorator(
                    'booking_check_in'
                )(<DatePicker/>)}
            </FormItem>
            <FormItem label="Check Out">
                {getFieldDecorator(
                    'booking_check_out'
                )(<DatePicker/>)}
            </FormItem>
            <FormItem label="Guest Number">
                {getFieldDecorator(
                    'booking_guest_number'
                )(<InputNumber/>)}
            </FormItem>
            <FormItem label="Guest Phone">
                {getFieldDecorator(
                    'booking_guest_phone'
                )(<Input/>)}
            </FormItem>
            <FormItem label="Guest ETA">
                {getFieldDecorator(
                    'booking_guest_eta'
                )(<TimePicker/>)}
            </FormItem>
            <FormItem label="Communication Channel">
                {getFieldDecorator(
                    'booking_comm_channel'
                )(
                    <Select>
                        <Option value={0}>Whatsapp</Option>
                        <Option value={1}>Booking.com</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Earned">
                {getFieldDecorator(
                    'booking_earned'
                )(<InputNumber />)}
            </FormItem>
            <FormItem label="Currency">
                {getFieldDecorator(
                    'booking_currency'
                )(
                    <Select>
                        <Option value={1}>IDR</Option>
                        <Option value={2}>USD</Option>
                     </Select>
                )}
            </FormItem>
            <FormItem label="Listing">
                {getFieldDecorator(
                    'listing_id'
                )(
                    <Select>
                    </Select>
                )}
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
        
      form.resetFields();
      this.setState({ visible: false });
      this.renderChange();
    });
  }
  renderChange=()=>{
    
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.renderDataBc(0,0,0,0);
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
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,editBooking,editBookingEmployee,renderDataBc}
)(AddBooking);

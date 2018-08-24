import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Modal, Form, Input,InputNumber, Radio ,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../../bvComponents/Uielements/select';

import actionEmployee from '../../../../../../bvScenes/ResourcesManagement/scenes/Employee/redux/employee/actions';
import actionBooking from '../../../../../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import actionArrival from '../../../../../Operation/scenes/ArrivalList/components/ArrivalTable/redux/arrivalTable/actions';

const {renderDataEmployee,editBookingEmployee} = actionEmployee;
const {editBooking}=actionBooking;
const {renderData}=actionArrival;

const FormItem = Form.Item;
const Option = SelectOption;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Details"
          okText="Update"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Unit Name">
              <Input disabled={true} type="textarea" defaultValue={this.props.dataList[this.props.index].unit_name}/>
            </FormItem>
            <FormItem label="Guest Name">
              <Input disabled={true} type="textarea" defaultValue={this.props.dataList[this.props.index].booking_guest_name}/>
            </FormItem>
            <FormItem label="Check In">
              <DatePicker disabled={true} dateFormat="YYYY-MM-DD"
                  defaultValue={this.props.dataList[this.props.index].booking_check_in ? moment(this.props.dataList[this.props.index].booking_check_in, 'YYYY-MM-DD') : moment()}
                />
              </FormItem>
            <FormItem label="Check Out">
              {getFieldDecorator('check_out',{
                initialValue:moment(this.props.dataList[this.props.index].booking_check_out, 'YYYY-MM-DD')
              })(<DatePicker dateFormat="YYYY-MM-DD"/>)}
            </FormItem>
            <FormItem label="Number of Guests">
                <InputNumber disabled={true} type="textarea" defaultValue={this.props.dataList[this.props.index].booking_guest_number}/>
              </FormItem>
            <FormItem label="LOS">
                <InputNumber disabled={true} type="textarea" defaultValue={this.props.dataList[this.props.index].booking_los}/>
              </FormItem>
            <FormItem label="ETA">
              {getFieldDecorator('eta',{
                initialValue:this.props.dataList[this.props.index].booking_guest_eta ? moment(this.props.dataList[this.props.index].booking_guest_eta,'HH:mm'):null
              })(<TimePicker format={'HH:mm'} />)}
            </FormItem>
            <FormItem label="Guest Phone">
                {getFieldDecorator('phone',{
                  initialValue:this.props.dataList[this.props.index].booking_guest_phone
                })(
                  <Input/>
                )}
              </FormItem>
            <FormItem label="Host">
                {getFieldDecorator('host',{
                  initialValue:this.props.dataList[this.props.index].host.employee_id?this.props.dataList[this.props.index].host.employee_id:null
                })(
                <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select host"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                >
                  {this.props.employees.map(employee=>
                    <Option value={employee.employee_id}>{employee.employee_name}</Option>
                  )}
                </Select>)}
            </FormItem>
            <FormItem label="Driver">
                {getFieldDecorator('driver',{
                  initialValue:this.props.dataList[this.props.index].driver.employee_id?this.props.dataList[this.props.index].driver.employee_id:null
                })(
                <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select driver"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                >
                  {this.props.employees.map(employee=>
                    <Option value={employee.employee_id}>{employee.employee_name}</Option>
                  )}
                </Select>)}
            </FormItem>
            <FormItem label="Status">
                {getFieldDecorator('status',{
                  initialValue:this.props.dataList[this.props.index].booking_guest_status
                })(
                <Select>
                    <Option value={0}>Not Checked In</Option>
                    <Option value={1}>Checked In</Option>
                    <Option value={2}>Checked In, Not Meeting Host</Option>
                    <Option value={3}>Overbooking</Option> 
                </Select>)}
              </FormItem>
            <FormItem label="Communication Channel">
                {getFieldDecorator('comm',{
                  initialValue:this.props.dataList[this.props.index].booking_comm_channel
                })(
                <Select>
                    <Option value="1">Whatsapp</Option>
                    <Option value="2">Airbnb Message</Option>
                    <Option value="3">WeChat</Option>
                    <Option value="4">Booking.com</Option>
                    <Option value="5">Agoda</Option>
                </Select>)}
              </FormItem>
              <FormItem label="Verifier">
                  {getFieldDecorator(
                      'verifier', {
                          initialValue:this.props.dataList[this.props.index].verifier.employee_id?
                          this.props.dataList[this.props.index].verifier.employee_id:null,
                      }
                  )(      
                      <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select verifier"
                      optionFilterProp="children"
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                      disabled={this.props.dataList[this.props.index].verifier.employee_id?true:false}>
                          {this.props.employees.map(employee=>
                              <Option value={employee.employee_id}>{employee.employee_name}</Option>
                          )}
                      </Select>
                  )}
              </FormItem>
            <FormItem>
            {getFieldDecorator('booking_id',{
                  initialValue:this.props.dataList[this.props.index].booking_id
                })(<Input hidden={true} />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);
const that=this;
class EditCell extends Component {

  state = {
    visible: false,
    employees:{}
  };

  showModal = () => {
    this.setState({ visible: true });
    this.props.renderDataEmployee();
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
      let eta=null;
      if(values["eta"]!==null){
        eta=moment(values["eta"]).format("HH:mm").toString();
      }
      this.props.editBooking(
        values["booking_id"],
        moment(values["check_out"]).format('YYYY-MM-DD').toString(),
        eta,
        values["status"],
        values["phone"],
        values["comm"],
        values["notes"]
      );
        //host
      if(values["host"]!==null){
        this.props.editBookingEmployee(
          values["booking_id"],
          values["host"],
          0,
          "host"
        );
      }
      //driver
      if(values["driver"]!==null){
        this.props.editBookingEmployee(
          values["booking_id"],
          values["driver"],
          1,
          "driver"
        );
      }
      //verifier
      if(values["verifier"]!==null){
        this.props.editBookingEmployee(
          values["booking_id"],
          values["verifier"],
          2,
          "verifier"
        );
      }
      console.log("page now : "+this.props.page);
      this.props.onPageChange(
        this.props.indexTable,
        this.props.area,
        this.props.DateRange.date,
        this.props.Searchbar.filterType,
        this.props.Searchbar.filterer,
        this.props.DateRange.dateType,
        this.props.page,
        this.props.sort);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps){
    console.log("response log " +nextProps.Current.response);
    if(nextProps.Current.response === "success"){

    }
  }
  render() {
    return (
      <div>
        <Button ghost onClick={this.showModal}>Details</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          dataList={this.props.dataList}
          index={this.props.index}
          employees={this.props.Employee.results}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Employee:state.employee,
    Table:state.arrivalTable,
    Searchbar:state.searchbar,
    DateRange:state.daterange,
    Current:state.bookingCurrent
  };
}
export default connect(
  mapStateToProps,
  { editBooking,editBookingEmployee,renderDataEmployee,renderData}
)(EditCell);

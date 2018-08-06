import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Modal, Form, Input, Radio ,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../../bvComponents/Uielements/select';
import actions from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/editCell/actions';
import actionArrival from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/arrivalTable/actions';
const FormItem = Form.Item;
const Option = SelectOption;
const {renderDataEmployee,editBooking,editBookingEmployee} = actions;
const {renderData}=actionArrival;
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
            <FormItem label="LOS">
                <Input disabled={true} type="textarea" defaultValue={this.props.dataList[this.props.index].booking_los}/>
              </FormItem>
            <FormItem label="ETA">
              {getFieldDecorator('eta',{
                initialValue:this.props.dataList[this.props.index].booking_guest_eta ? moment(this.props.dataList[this.props.index].booking_guest_eta,'HH:mm'):moment('12:00','HH:mm')
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
                <Select>
                  {this.props.employees.map(employee=>
                    <Option value={employee.employee_id}>{employee.employee_name}</Option>
                  )}
                </Select>)}
            </FormItem>
            <FormItem label="Driver">
                {getFieldDecorator('driver',{
                  initialValue:this.props.dataList[this.props.index].driver.employee_id?this.props.dataList[this.props.index].driver.employee_id:null
                })(
                <Select>
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
                </Select>)}
              </FormItem>
                {console.log(this.props.dataList[this.props.index].booking_comm_channel)}
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
              <FormItem label="Notes">
                {getFieldDecorator('notes',{
                  initialValue:this.props.dataList[this.props.index].booking_notes
                })(
                <Input/>)}
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

class EditCell extends Component {
  state = {
    visible: false,
    employees:{}
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
    this.props.Table.singleSearch=false;
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
        console.log(values["comm"])
      this.props.editBooking(
        values["booking_id"],
        moment(values["check_out"]).format('YYYY-MM-DD').toString(),
        moment(values["eta"]).format('HH:mm').toString(),
        values["status"],
        values["phone"],
        values["comm"],
        values["notes"]
      );
        //host
      this.props.editBookingEmployee(
        values["booking_id"],
        values["host"],
        0
      );
      //driver
      this.props.editBookingEmployee(
        values["booking_id"],
        values["driver"],
        1
      );
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  renderChange=()=>{
    this.props.Table.checkCount=0;
    this.props.Table.totalData=0;
    this.props.renderData(this.props.key,this.props.area,
      this.props.DateRange.date,this.props.Searchbar.filterType,this.props.Searchbar.filterer,this.props.DateRange.dateType)
    
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.renderDataEmployee();
    this.props.Table.singleSearch=true;
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
          employees={this.props.EditCell.results}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    EditCell: state.editCell,
    Table:state.arrivalTable,
    Searchbar:state.searchbar,
    DateRange:state.daterange
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,editBooking,editBookingEmployee,renderData}
)(EditCell);

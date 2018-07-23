import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Modal,Form ,DatePicker} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../../../bvComponents/Uielements/input';
import moment from 'moment';
import actions from '../../../../Operation/scenes/ArrivalList/components/redux/helperCells/actions';


const FormItem = Form.Item;
const Option = SelectOption;
const {renderDataEmployee} = actions;
class EditCell extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  componentDidMount(){
      this.props.renderDataEmployee();
  }

  render() {
    const {dataList,index,renderDataEmployee,LoadEmployee} = this.props;
    const employees = LoadEmployee.results;
    return (
      <div>
        <Button ghost onClick={this.showModal}>Edit</Button>
        <Modal
          title="Edit"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="Unit Name">
              <Input type="textarea" defaultValue={dataList[index].booking_unit_name}/>
            </FormItem>
            <FormItem label="Guest Name">
              <Input type="textarea" defaultValue={dataList[index].booking_guest_name}/>
            </FormItem>
            <FormItem label="ETA">
              <Input type="textarea" defaultValue={dataList[index].booking_eta}/>
            </FormItem>
            <FormItem label="Check In">
            <DatePicker dateFormat="YYYY-MM-DD"
                defaultValue={dataList[index].booking_check_in ? moment(dataList[index].booking_check_in, 'YYYY-MM-DD') : moment()}
              />
            </FormItem>
            <FormItem label="Check Out">
              <DatePicker dateFormat="YYYY-MM-DD"
                defaultValue={dataList[index].booking_check_out ? moment(dataList[index].booking_check_out, 'YYYY-MM-DD') : moment()}
              />
            </FormItem>
            <FormItem label="LOS">
              <Input type="textarea" defaultValue={dataList[index].booking_los}/>
            </FormItem>
            <FormItem label="Driver">
              <Select>
                {employees.map(employee=>
                  <Option value={employee.employee_id}>{employee.employee_name}</Option>
                )}
              </Select>
            </FormItem>
            <FormItem label="Host">
              <Select>
                  {LoadEmployee.results.map(employee=>
                    <Option value={employee.employee_id}>{employee.employee_name}</Option>
                  )}
              </Select>
            </FormItem>
            <FormItem label="Status">
              <Select>
              </Select>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { 
    LoadEmployee: state.loadEmployee
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee }
)(EditCell);

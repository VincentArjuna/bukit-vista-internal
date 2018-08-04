import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Modal, Form, Input, Radio ,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../../bvComponents/Uielements/select';
import actions from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/editCell/actions';
import aT1 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/table1/actions';
import aT2 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/table2/actions';
import aT3 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/table3/actions';
import aT4 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/table4/actions';
import aT5 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/table5/actions';
import aT6 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table6/redux/table6/actions';
import aT7 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table7/redux/table7/actions';
import aT8 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table8/redux/table8/actions';
import aT9 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table9/redux/table9/actions';
import aT10 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table10/redux/table10/actions';
import aT11 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table11/redux/table11/actions';
import aT12 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table12/redux/table12/actions';
import aT13 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table13/redux/table13/actions';
import aT14 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table14/redux/table14/actions';
import aT15 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table15/redux/table15/actions';
import aT16 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table16/redux/table16/actions';
import aT17 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table17/redux/table17/actions';
import aT18 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table18/redux/table18/actions';
import aT19 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table19/redux/table19/actions';
import aT20 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table20/redux/table20/actions';
import aT21 from '../../../../../../bvScenes/Operation/scenes/ArrivalList/components/Table21/redux/table21/actions';

const {renderData1} = aT1;
const {renderData2} = aT2;
const {renderData3} = aT3;
const {renderData4} = aT4;
const {renderData5} = aT5;
const {renderData6} = aT6;
const {renderData7} = aT7;
const {renderData8} = aT8;
const {renderData9} = aT9;
const {renderData10} = aT10;
const {renderData11} = aT11;
const {renderData12} = aT12;
const {renderData13} = aT13;
const {renderData14} = aT14;
const {renderData15} = aT15;
const {renderData16} = aT16;
const {renderData17} = aT17;
const {renderData18} = aT18;
const {renderData19} = aT19;
const {renderData20} = aT20;
const {renderData21} = aT21;

const FormItem = Form.Item;
const Option = SelectOption;
const {renderDataEmployee,editBooking,editBookingEmployee} = actions;

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
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values)
      this.props.editBooking(
        values["booking_id"],
        moment(values["check_out"]).format('YYYY-MM-DD').toString(),
        moment(values["eta"]).format('HH:mm').toString(),
        values["status"]);
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
      //refresh
      this.props.renderData1('A0001',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData2('A0002',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData3('A0003',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData4('A0004',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData5('A0005',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData6('A0006',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData7('A0007',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData8('A0008',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData9('A0009',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData10('A0010',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData11('A0011',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData12('A0012',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData13('A0013',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData14('A0014',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData15('A0015',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData16('A0016',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData17('A0017',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData18('A0018',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData19('A0019',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData20('A0020',moment().format('YYYY-MM-DD').toString(),0,null,0);
      this.props.renderData21('A0021',moment().format('YYYY-MM-DD').toString(),0,null,0);
      //end refresh
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.renderDataEmployee();
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
    Header:state.header
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,editBooking,editBookingEmployee,
    renderData1,
    renderData2,
    renderData3,
    renderData4,
    renderData5,
    renderData6,
    renderData7,
    renderData8,
    renderData9,
    renderData10,
    renderData11,
    renderData12,
    renderData13,
    renderData14,
    renderData15,
    renderData16,
    renderData17,
    renderData18,
    renderData19,
    renderData20,
    renderData21,  
  }
)(EditCell);

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import aEmployee from '../../../../ResourcesManagement/scenes/Employee/redux/employee/actions';
import aProperty from '../../../../../bvScenes/MarketBuilding/scenes/Property/redux/property/actions';
import { message } from 'antd';
import MessageContent from "../../../../../bvComponents/Message/message.style";

import Box from '../../../../../bvComponents/Utility/box';
const FormItem = Form.Item;
const Option = SelectOption;

const {renderDataEmployee,pageCountEmployee} = aEmployee;
const {editProperty,onPageChange}=aProperty;

const CollectionCreateForm = Form.create()(
class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Property"
          okText="Edit"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
            <Box>
            <Form layout="horizontal">
                <FormItem label="Name">
                    {getFieldDecorator(
                        'name', {
                            rules: [{ required: true, message: 'This is required' }],
                            initialValue:this.props.dataList[this.props.index].property_name
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Type">
                    {getFieldDecorator(
                        'type', {
                            initialValue:this.props.dataList[this.props.index].property_type
                        }
                    )(
                        <Select>
                            <Option value={1}>House</Option>
                            <Option value={2}>Villa</Option>
                            <Option value={3}>Apartment</Option>
                            <Option value={4}>Guesthouse</Option>
                            <Option value={5}>Resort</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Status">
                    {getFieldDecorator(
                        'status', {
                            initialValue:this.props.dataList[this.props.index].property_status
                        }
                    )(
                        <Select>
                            <Option value={1}>Partner</Option>
                            <Option value={0}>Non Partner</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Package">
                    {getFieldDecorator(
                        'package', {
                            initialValue:this.props.dataList[this.props.index].property_package
                        }
                    )(
                        <Select>
                            <Option value={1}>Partnership</Option>
                            <Option value={2}>Exclusive</Option>
                            <Option value={3}>Allocation</Option>
                            <Option value={4}>Tokeet</Option>
                            <Option value={5}>Negotiable</Option>
                            <Option value={6}>Non-Negotiable</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Design">
                    {getFieldDecorator(
                        'design', {
                            initialValue:this.props.dataList[this.props.index].property_design
                        }
                    )(
                        <Select>
                            <Option value={1}>Basic</Option>
                            <Option value={2}>Adventurous</Option>
                            <Option value={3}>Unique</Option>
                            <Option value={4}>Modern Comfort</Option>
                            <Option value={5}>Luxury</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Proximity">
                    {getFieldDecorator(
                        'proximity', {
                            initialValue:this.props.dataList[this.props.index].property_proximity
                        }
                    )(
                        <Select>
                            <Option value={1}>Walking distance to attraction</Option>
                            <Option value={2}>5-10 minutes drive to attraction</Option>
                            <Option value={3}>Far from center of attraction</Option>
                            <Option value={4}>Remote location</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Life Support">
                    {getFieldDecorator(
                        'life_support', {
                            initialValue:this.props.dataList[this.props.index].property_life_support
                        }
                    )(
                        <Select>
                            <Option value={1}>Walk to supermarket/restaurant</Option>
                            <Option value={2}>Drive to supermarket/restaurant</Option>
                            <Option value={3}>No nearby shops</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Service">
                    {getFieldDecorator(
                        'service', {
                            initialValue:this.props.dataList[this.props.index].property_service
                        }
                    )(
                       <Select>
                           <Option value={1}>Onsite staff</Option>
                           <Option value={2}>Self Service</Option>
                       </Select>
                    )}
                </FormItem>
                <FormItem label="Owner Group Link">
                    {getFieldDecorator(
                        'owner_group_link',{
                            initialValue:this.props.dataList[this.props.index].property_owner_group_link
                        }
                    )(
                        <Input/>
                    )}
                </FormItem>
                <FormItem label="Area">
                    {getFieldDecorator(
                        'area', {
                            rules: [{ required: true, message: 'This is required' }],
                            initialValue:this.props.dataList[this.props.index].area_id
                        }
                    )(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select area"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}                        
                        >
                            <Option value="A0001">Yogyakarta</Option>
                            <Option value="A0002">Uluwatu</Option>
                            <Option value="A0003">Canggu</Option>
                            <Option value="A0004">Ubud</Option>
                            <Option value="A0005">Jakarta</Option>
                            <Option value="A0006">Bandung</Option>
                            <Option value="A0007">Phuket</Option>
                            <Option value="A0008">Bingin</Option>
                            <Option value="A0009">Balangan</Option>
                            <Option value="A0010">Jimbaran</Option>
                            <Option value="A0011">Ungasan</Option>
                            <Option value="A0012">Nusa Dua</Option>
                            <Option value="A0013">Padang Padang</Option>
                            <Option value="A0014">Gili Trawangan</Option>
                            <Option value="A0015">Seminyak</Option>
                            <Option value="A0016">Kuta</Option>
                            <Option value="A0017">Singapore</Option>
                            <Option value="A0018">Cemagi</Option>
                            <Option value="A0019">Penang</Option>
                            <Option value="A0020">Nusa Penida</Option>
                            <Option value="A0021">Gili Air</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Market Builder">
                    {getFieldDecorator(
                        'employee', {
                            rules: [{ required: true, message: 'This is required' }],
                            initialValue:this.props.dataList[this.props.index].employee_id
                        }
                    )(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select employee"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}                        
                        >
                            {this.props.employees.map(employee=>
                                <Option value={employee.employee_id}>{employee.employee_name}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator(
                        'property_id', {
                            initialValue:this.props.dataList[this.props.index].property_id
                        }
                    )(
                        <Input hidden={true}/>
                    )}
                </FormItem>
            
            </Form>
            </Box>
        </Modal>
      );
    }
  }
);

class EditProperty extends Component {
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
      console.log(values);
      this.props.editProperty(
          values["name"],
          values["type"],
          values["status"],
          values["package"],
          values["design"],
          values["proximity"],
          values["life_support"],
          values["service"],
          values["owner_group_link"],
          values["area"],
          values["employee"],
          values["property_id"]
      );

      form.resetFields();
      this.setState({ visible: false });;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.pageCountEmployee();

  }
  componentWillReceiveProps(nextProps){
    if(nextProps.Property.notificationMessage === "success"){
        console.log("success kepanggil")
        message.success(<MessageContent>Property successfully edited!</MessageContent>,3);
        this.props.onPageChange(
            this.props.Searchbar.filterType,
            this.props.Searchbar.filterer,
            10,
            this.props.Property.page
          );
      }
      if(nextProps.Property.notificationMessage === "error"){
        console.log("error kepanggil")
        message.error(<MessageContent>Fail to edit property</MessageContent>,3);
      }
  }
  render() {
    return (
      <div>
        <Button type="primary" loading={this.props.Employee.rendered?false:true} onClick={this.showModal}>Edit Property</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          index={this.props.index}
          dataList={this.props.dataList}
          employees={this.props.Employee.totalData}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Employee:state.employee,
    Property:state.property,
    Searchbar:state.searchbar
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee,editProperty,onPageChange,pageCountEmployee}
)(EditProperty);

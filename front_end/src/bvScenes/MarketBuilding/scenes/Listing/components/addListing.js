import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import debounce from 'lodash/debounce';
import {Modal, Form, Input,InputNumber,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import Spin from '../../../../../bvComponents/Uielements/spin';
import aUnit from '../../../../../bvScenes/MarketBuilding/scenes/Unit/redux/unit/actions';
import aEmployee from '../../../../ResourcesManagement/scenes/Employee/redux/employee/actions';
import aListing from '../../../../../bvScenes/MarketBuilding/scenes/Listing/redux/listing/actions';
import aProfile from '../../../../ResourcesManagement/scenes/Profile/redux/profile/actions';
import { message } from 'antd';
import MessageContent from "../../../../../bvComponents/Message/message.style";

const FormItem = Form.Item;
const Option = SelectOption;

const {renderDataEmployee,pageCountEmployee} = aEmployee;
const {renderDataUnit}=aUnit;
const {addListing}=aListing;
const {renderDataProfile,pageCountProfile}=aProfile;

const CollectionCreateForm = Form.create()(
class extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchUnit=debounce(this.handleSearchUnit,800);
        this.state={
            dataUnit:[],
            dataListing:[],
            valueUnit:null,
            valueListing:null,
        }
    }

    handleChangeUnit=(value)=>{
        this.setState({
            valueUnit:value,
            dataUnit:[]
        })
    }
    handleSearchUnit=(value)=>{
        this.props.renderDataUnit(2,value,30)

    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const {valueUnit,valueListing,data}=this.state;
      return (
        <Modal
          visible={visible}
          title="New Listing"
          okText="Add"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form layout="vertical">
            <FormItem label="ID">
                {getFieldDecorator(
                    'listing_id', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Name">
                {getFieldDecorator(
                    'listing_name', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Onboard Date">
                {getFieldDecorator(
                    'onboard_date', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(<DatePicker/>)}
            </FormItem>   
            <FormItem label="Status">
                {getFieldDecorator(
                    'status', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select>
                        <Option value={1}>Listed</Option>
                        <Option value={2}>Ready to Launch</Option>
                        <Option value={3}>Unlisted</Option>
                    </Select>
                )}
            </FormItem>   
            <FormItem label="Instant Book">
                {getFieldDecorator(
                    'instant_book', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select>
                        <Option value={1}>Yes</Option>
                        <Option value={0}>No</Option>
                    </Select>
                )}
            </FormItem>  
            <FormItem label="Account Owner">
                {getFieldDecorator(
                    'acc_owner'
                )(<Input/>)}
            </FormItem>
            <FormItem label="Account BukitVista">
                {getFieldDecorator(
                    'acc_bv'
                )(<Input/>)}
            </FormItem> 
            <FormItem label="Remark">
                {getFieldDecorator(
                    'remark', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select>
                        <Option value={1}>New</Option>
                        <Option value={2}>VA</Option>
                        <Option value={3}>CS</Option>
                        <Option value={4}>NP</Option>
                        <Option value={5}>Others</Option>
                    </Select>
                )}
            </FormItem>      
            <FormItem label="Unit">
                {getFieldDecorator(
                    'unit_id', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select
                    showSearch
                    placeholder="Select unit"
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={this.handleSearchUnit}
                    onChange={this.handleChangeUnit}
                    notFoundContent={this.props.Unit.fetching ? <Spin size="small" /> : null}
                    >
                        {this.props.Unit.results.map(d => <Option value={d.unit_id}>{d.unit_name}</Option>)}
                    </Select>
                )}
            </FormItem>   
            <FormItem label="Profile">
                {getFieldDecorator(
                    'profile_id', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select profile"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                    >
                        {this.props.profile.map(profile=>
                            <Option value={profile.profile_id}>{profile.profile_name}</Option>
                        )}                       
                    </Select>
                )}
            </FormItem>  
            <FormItem label="Added By">
                {getFieldDecorator(
                    'employee_id', {
                        rules: [{ required: true, message: 'This is required' }]
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
            </Form>
        </Modal>
      );
    }
  }
);

class AddListing extends Component {
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
      this.props.addListing(
          values["listing_id"],
          values["listing_name"],
          moment(values["onboard_date"]).format('YYYY-MM-DD').toString(),
          values["status"],
          values["instant_book"],
          (values["acc_owner"]!==undefined?values["acc_owner"]:""),
          (values["acc_bv"]!==undefined?values["acc_bv"]:""),
          values["remark"],
          values["unit_id"],
          values["profile_id"],
          values["employee_id"]
      )
      form.resetFields();
      this.setState({ visible: false });;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.pageCountEmployee();
    this.props.pageCountProfile();
  }

  componentWillMount(){
    this.props.pageCountEmployee();
    this.props.pageCountProfile();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.Listing.notificationMessage === "success"){
        console.log("success kepanggil")
        message.success(<MessageContent>Listing successfully added!</MessageContent>,3);
        
      }
      if(nextProps.Listing.notificationMessage === "error"){
        console.log("error kepanggil")
        message.error(<MessageContent>Fail to add listing</MessageContent>,3);
        
      }
  }
  render() {
    return (
      <div>
        <Button type="primary"  loading={this.props.Employee.rendered?false:true} onClick={this.showModal}>Add Listing</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          employees={this.props.Employee.totalData}
          profile={this.props.Profile.totalData}
          renderDataUnit={this.props.renderDataUnit}
          Unit={this.props.Unit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Listing:state.listing,
    Unit:state.unit,
    Employee:state.employee,
    Profile:state.profile
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,renderDataUnit,addListing,renderDataProfile,pageCountProfile,pageCountEmployee}
)(AddListing);
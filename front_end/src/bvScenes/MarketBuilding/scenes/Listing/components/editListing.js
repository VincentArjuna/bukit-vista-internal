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
const {renderDataProfile,pageCountProfile}=aProfile;
const {renderDataUnit}=aUnit;
const {editListing,onPageChange}=aListing;

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
          title="Edit Listing"
          okText="Edit"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form layout="vertical">
            <FormItem label="ID">
                {getFieldDecorator(
                    'listing_id', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].listing_id
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Name">
                {getFieldDecorator(
                    'listing_name', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].listing_name
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Onboard Date">
                {getFieldDecorator(
                    'onboard_date', {
                        initialValue:this.props.dataList[this.props.index].listing_onboard_date?
                            moment(this.props.dataList[this.props.index].listing_onboard_date,'YYYY-MM-DD'):
                            null
                    }
                )(<DatePicker/>)}
            </FormItem>   
            <FormItem label="Status">
                {getFieldDecorator(
                    'status', {
                        initialValue:this.props.dataList[this.props.index].listing_status
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
                        initialValue:this.props.dataList[this.props.index].listing_instant_book
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
                    'acc_owner', {
                        initialValue:this.props.dataList[this.props.index].listing_account_owner
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Account BukitVista">
                {getFieldDecorator(
                    'acc_bv', {
                        initialValue:this.props.dataList[this.props.index].listing_account_bv
                    }
                )(<Input/>)}
            </FormItem> 
            <FormItem label="Remark">
                {getFieldDecorator(
                    'remark', {
                        initialValue:this.props.dataList[this.props.index].listing_remark
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
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].unit_name
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
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].profile_id
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
            </Form>
        </Modal>
      );
    }
  }
);

class EditListing extends Component {
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
      let date=null;
      let unitId = this.props.dataList[this.props.index].unit_id;
      let checkUnitId = values["unit_id"].substring(0,2);
      checkUnitId == "UN" ? unitId=values["unit_id"]:console.log("unit_id not changed");
      if(values["onboard_date"]!==null){
        date=moment(values["onboard_date"]).format('YYYY-MM-DD').toString()
      }
      this.props.editListing(
          values["listing_id"],
          values["listing_name"],
          date,
          values["status"],
          values["instant_book"],
          (values["acc_owner"]!==undefined?values["acc_owner"]:""),
          (values["acc_bv"]!==undefined?values["acc_bv"]:""),
          values["remark"],
          unitId,
          values["profile_id"],
          values["employee_id"]
      )
      this.props.onPageChange(
        this.props.Searchbar.filterType,
        this.props.Searchbar.filterer,
        10,
        this.props.Listing.page
      );
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.pageCountEmployee();
    this.props.pageCountProfile();
    console.log("total page " + this.props.Profile.totalPage);
  }
  componentWillReceiveProps(nextProps){
    //if(nextProps.Profile.totalPage>3);
    if(nextProps.Listing.notificationMessage === "success"){
        console.log("success kepanggil")
        message.success(<MessageContent>Listing successfully edited!</MessageContent>,3);
        
      }
      if(nextProps.Listing.notificationMessage === "error"){
        console.log("error kepanggil")
        message.error(<MessageContent>Fail to edit listing</MessageContent>,3);
      }
  }
  render() {
        return (
        <div>
            <Button type="primary" loading={this.props.Employee.rendered?false:true} onClick={this.showModal}>Edit Listing</Button>
            <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            employees={this.props.Employee.totalData}
            profile={this.props.Profile.totalData}
            renderDataUnit={this.props.renderDataUnit}
            dataList={this.props.dataList}
            index={this.props.index}
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
    Searchbar:state.searchbar,
    Profile:state.profile
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,renderDataUnit,editListing,onPageChange,renderDataProfile,pageCountProfile,pageCountEmployee}
)(EditListing);

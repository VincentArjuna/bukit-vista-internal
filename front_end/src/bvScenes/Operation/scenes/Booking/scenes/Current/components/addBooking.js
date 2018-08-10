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
import aUnit from '../../../../../../../bvScenes/MarketBuilding/scenes/Unit/redux/unit/actions';
import aEmployee from '../../../../../../ResourcesManagement/scenes/Employee/redux/employee/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {renderDataEmployee,editBookingEmployee} = aEmployee;
const {renderDataBc,addBooking}=aBooking;
const {renderDataUnit}=aUnit;
const{renderDataListing}=aListing;
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
        this.props.renderDataListing(3,value,30);
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
            <FormItem label="Unit">
            {getFieldDecorator(
                'unit_id'
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
            <FormItem label="Listing">
                {getFieldDecorator(
                    'listing_id', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                <Select 
                    notFoundContent={this.props.Listing.fetching ? <Spin size="small" /> : null}
                >
                    {this.props.Listing.results.map(d => <Option value={d.listing_id}>{d.listing_id+'-'+d.listing_name}</Option>)}
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
                        <Option value={3}>Booking.com</Option>
                        <Option value={4}>Agoda</Option>
                        <Option value={5}>Direct</Option>
                     </Select>
                )}
            </FormItem>
            <FormItem label="Conversation URL">
                {getFieldDecorator(
                    'conversation'
                )(<Input/>)}
            </FormItem>
            <FormItem label="Verifier">
                {getFieldDecorator(
                    'verifier', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <Select>
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

class AddBooking extends Component {
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
      this.props.editBookingEmployee(values["booking_id"],values["verifier"],2);
      form.resetFields();
      this.setState({ visible: false });;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  componentDidMount(){
    this.props.renderDataBc(0,0,0,0);
    this.props.renderDataListing(0,null);
    this.props.renderDataEmployee();
    

  }
  render() {
    return (
      <div>
        <Button type="primary"  onClick={this.showModal}>Add Booking</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          dataList={this.props.Current.results}
          index={this.props.index}
          employees={this.props.Employee.results}
          Unit={this.props.Unit}
          renderDataUnit={this.props.renderDataUnit}
          Listing={this.props.Listing}
          renderDataListing={this.props.renderDataListing}
          addBooking={this.props.AddBooking}
          editBookingEmployee={this.props.editBookingEmployee}
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
    Unit:state.unit,
    Employee:state.employee
  };
}
export default connect(
  mapStateToProps,
  { renderDataEmployee ,editBookingEmployee,renderDataBc,renderDataListing,addBooking,renderDataUnit}
)(AddBooking);

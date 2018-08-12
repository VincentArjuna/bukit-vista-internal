import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import debounce from 'lodash/debounce';
import {Modal, Form, Input,InputNumber,TimePicker,DatePicker} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import Spin from '../../../../../bvComponents/Uielements/spin';
import aProperty from '../../Property/redux/property/actions';
import aUnit from '../../Unit/redux/unit/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {renderDataProperty}=aProperty;
const {editUnit,onPageChange}=aUnit;

const CollectionCreateForm = Form.create()(
class extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchProperty=debounce(this.handleSearchProperty,800);
        this.state={
            dataProperty:[],
            valueProperty:null,
        }
    }

    handleChangeProperty=(value)=>{
        this.setState({
            valueProperty:value,
            dataProperty:[]
        })
    }
    handleSearchProperty=(value)=>{
        this.props.renderDataProperty(2,value,30)

    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Unit"
          okText="Edit"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form layout="vertical">
            <FormItem label="Name">
                {getFieldDecorator(
                    'unit_name', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.dataList[this.props.index].unit_name
                    }
                )(<Input/>)}
            </FormItem>
            <FormItem label="Onboard Date">
                {getFieldDecorator(
                    'onboard_date', {
                        initialValue:this.props.dataList[this.props.index].unit_onboard_date?
                            moment(this.props.dataList[this.props.index].unit_onboard_date,'YYYY-MM-DD'):null

                    }
                )(<DatePicker/>)}
            </FormItem>   
            <FormItem label="Base Price">
                {getFieldDecorator(
                    'base_price', {
                        initialValue:this.props.dataList[this.props.index].unit_base_price
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem>   
            <FormItem label="Currency">
                {getFieldDecorator(
                    'currency', {
                        initialValue:this.props.dataList[this.props.index].unit_currency
                    }
                )(
                    <Select>
                        <Option value={1}>IDR</Option>
                        <Option value={2}>USD</Option>
                        <Option value={3}>EUR</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Capacity">
                {getFieldDecorator(
                    'capacity', {
                        initialValue:this.props.dataList[this.props.index].unit_capacity
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem>   
            <FormItem label="Number of Room(s)">
                {getFieldDecorator(
                    'number_room', {
                        initialValue:this.props.dataList[this.props.index].unit_number_room
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem>     
            <FormItem label="Swimming Pool">
                {getFieldDecorator(
                    'swimming_pool', {
                        initialValue:this.props.dataList[this.props.index].unit_swimming_pool
                    }
                )(
                    <Select>
                        <Option value={1}>Private Pool</Option>
                        <Option value={2}>Shared Pool</Option>
                        <Option value={3}>No Pool</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Percentage Owner">
                {getFieldDecorator(
                    'pOwner', {
                        initialValue:this.props.dataList[this.props.index].unit_percentage_owner
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem> 
            <FormItem label="Percentage BukitVista">
                {getFieldDecorator(
                    'pBv', {
                        initialValue:this.props.dataList[this.props.index].unit_percentage_bv
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem> 
            <FormItem label="Property">
                {getFieldDecorator(
                    'property_id', {
                        initialValue:this.props.dataList[this.props.index].property_id
                    }
                )(
                    <Select
                    showSearch
                    placeholder="Select property"
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={this.handleSearchProperty}
                    onChange={this.handleChangeProperty}
                    notFoundContent={this.props.Property.fetching ? <Spin size="small" /> : null}
                    >
                        {this.props.Property.results.map(d => <Option value={d.property_id}>{d.property_name}</Option>)}
                    </Select>
                )}
            </FormItem>  
            <FormItem>
                    {getFieldDecorator(
                        'unit_id', {
                            initialValue:this.props.dataList[this.props.index].unit_id
                        }
                    )(
                        <Input hidden={true}/>
                    )}
                </FormItem> 
            </Form>
        </Modal>
      );
    }
  }
);

class EditUnit extends Component {
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
      this.props.editUnit(
          values["unit_name"],
          moment(values["onboard_date"]).format('YYYY-MM-DD').toString(),
          values["base_price"],
          values["currency"],
          values["capacity"],
          values["number_room"],
          values["swimming_pool"],
          values["pOwner"],
          values["pBv"],
          values["property_id"],
          values["unit_id"]
      );
      this.props.onPageChange(
        this.props.Searchbar.filterType,
        this.props.Searchbar.filterer,
        10,
        this.props.Unit.page
      );
      form.resetFields();
      this.setState({ visible: false });;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary"  onClick={this.showModal}>Edit Unit</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          renderDataProperty={this.props.renderDataProperty}
          Property={this.props.Property}
          dataList={this.props.dataList}
          index={this.props.index}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Employee:state.employee,
    Property:state.property,
    Unit:state.unit,
    Searchbar:state.searchbar,
  };
}
export default connect(
  mapStateToProps,
  { renderDataProperty,editUnit,onPageChange}
)(EditUnit);

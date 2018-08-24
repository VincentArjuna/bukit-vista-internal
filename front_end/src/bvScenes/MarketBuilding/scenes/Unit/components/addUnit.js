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
const {addUnit}=aUnit;

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
          title="New Unit"
          okText="Add"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form layout="vertical">
            <FormItem label="Name">
                {getFieldDecorator(
                    'unit_name', {
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
            <FormItem label="Base Price">
                {getFieldDecorator(
                    'base_price', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <InputNumber/>
                )}
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
                        <Option value={3}>EUR</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="Capacity">
                {getFieldDecorator(
                    'capacity', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem>   
            <FormItem label="Number of Room(s)">
                {getFieldDecorator(
                    'number_room', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem>     
            <FormItem label="Swimming Pool">
                {getFieldDecorator(
                    'swimming_pool', {
                        rules: [{ required: true, message: 'This is required' }]
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
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem> 
            <FormItem label="Percentage BukitVista">
                {getFieldDecorator(
                    'pBv', {
                        rules: [{ required: true, message: 'This is required' }]
                    }
                )(
                    <InputNumber/>
                )}
            </FormItem> 
            <FormItem label="Property">
                {getFieldDecorator(
                    'property_id', {
                        rules: [{ required: true, message: 'This is required' }],
                        initialValue:this.props.isProperty?this.props.propId:null
                    }
                )(
                    this.props.isProperty?
                    <Input disabled defaultValue={this.props.propId}/>
                    :
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
            </Form>
        </Modal>
      );
    }
  }
);

class AddUnit extends Component {
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
      this.props.addUnit(
          values["unit_name"],
          moment(values["onboard_date"]).format('YYYY-MM-DD').toString(),
          values["base_price"],
          values["currency"],
          values["capacity"],
          values["number_room"],
          values["swimming_pool"],
          values["pOwner"],
          values["pBv"],
          values["property_id"]
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
        <Button type="primary"  onClick={this.showModal}>Add Unit</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          renderDataProperty={this.props.renderDataProperty}
          Property={this.props.Property}
          isProperty={this.props.isProperty}
          propId={this.props.propId}
          propName={this.props.Name}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Employee:state.employee,
    Property:state.property
  };
}
export default connect(
  mapStateToProps,
  { addUnit ,renderDataProperty}
)(AddUnit);

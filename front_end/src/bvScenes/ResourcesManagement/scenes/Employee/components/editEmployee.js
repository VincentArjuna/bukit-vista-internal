import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import actions from '../redux/employee/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {editEmployee,renderDataEmployee}=actions;

const CollectionCreateForm = Form.create()(
class extends React.Component {


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Employee"
          okText="Edit"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
            <Form layout="vertical">
                <FormItem label="Name">
                    {getFieldDecorator(
                        'name', {
                            rules: [{ required: true, message: 'This is required' }],
                            initialValue:this.props.dataList[this.props.index].employee_name
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Address">
                    {getFieldDecorator(
                        'address', {
                            initialValue:this.props.dataList[this.props.index].employee_address
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Phone">
                    {getFieldDecorator(
                        'phone', {
                            initialValue:this.props.dataList[this.props.index].employee_phone
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Status">
                    {getFieldDecorator(
                        'status', {
                            rules: [{ required: true, message: 'This is required' }],
                            initialValue:this.props.dataList[this.props.index].employee_status
                        }
                    )(
                        <Select>
                            <Option value={1}>Active</Option>
                            <Option value={0}>Inactive</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('id',{
                        initialValue:this.props.dataList[this.props.index].employee_id
                    })(<Input hidden={true} />)}
                </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class EditEmployee extends Component {
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
      this.props.editEmployee(
          values["name"],
          (values["address"]===undefined||values["address"]===""?"":values["address"]),
          (values["phone"]===undefined||values["phone"]===""?"":values["phone"]),
          values["status"],
          values["id"]
      );
      this.props.renderDataEmployee();
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
        <Button type="primary"  onClick={this.showModal}>Edit Employee</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          dataList={this.props.dataList}
          index={this.props.index}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {editEmployee,renderDataEmployee}
)(EditEmployee);

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import actions from '../redux/employee/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {addEmployee,renderDataEmployee}=actions;

const CollectionCreateForm = Form.create()(
class extends React.Component {


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="New Employee"
          okText="Add"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
            <Form layout="vertical">
                <FormItem label="Name">
                    {getFieldDecorator(
                        'name', {
                            rules: [{ required: true, message: 'This is required' }]
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Address">
                    {getFieldDecorator(
                        'address'
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Phone">
                    {getFieldDecorator(
                        'phone'
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Status">
                    {getFieldDecorator(
                        'status', {
                            rules: [{ required: true, message: 'This is required' }]
                        }
                    )(
                        <Select>
                            <Option value={1}>Active</Option>
                            <Option value={0}>Inactive</Option>
                        </Select>
                    )}
                </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class AddEmployee extends Component {
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
      this.props.addEmployee(
          values["name"],
          (values["address"]===undefined||values["address"]===""?"":values["address"]),
          (values["phone"]===undefined||values["phone"]===""?"":values["phone"]),
          values["status"]
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
        <Button type="primary"  onClick={this.showModal}>Add Employee</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {addEmployee,renderDataEmployee}
)(AddEmployee);

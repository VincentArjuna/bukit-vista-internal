import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import actions from '../redux/user/actions';
import aEmployee from '../../Employee/redux/employee/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {addUser,renderDataUser}=actions;
const {renderDataEmployee}=aEmployee;

const CollectionCreateForm = Form.create()(
class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Register New User"
          okText="Register"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
            <Form layout="vertical">
                <FormItem label="Email">
                    {getFieldDecorator(
                        'email', {
                            rules: [{ required: true, message: 'This is required' }]
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Password">
                    {getFieldDecorator(
                        'password', {
                            rules: [{ required: true, message: 'This is required' }]
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Employee">
                    {getFieldDecorator(
                        'employee', {
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

class AddUser extends Component {
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
      this.props.addUser(
          values["email"],
          values["password"],
          values["employee"]
      );
      this.props.renderDataUser();
      form.resetFields();
      this.setState({ visible: false });;
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
        <Button type="primary"  onClick={this.showModal}>Register User</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          employees={this.props.Employee.results}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Employee:state.employee
  };
}
export default connect(
  mapStateToProps,
  {addUser,renderDataUser,renderDataEmployee}
)(AddUser);

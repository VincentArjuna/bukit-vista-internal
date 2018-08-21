import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import actions from '../redux/user/actions';

const FormItem = Form.Item;

const {resetPassword,renderDataUser}=actions;

const CollectionCreateForm = Form.create()(
class extends React.Component {


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Reset Password"
          okText="Reset"
          cancelText="Back"
          onCancel={onCancel}
          onOk={onCreate}
        >
            <Form layout="vertical">
                <FormItem label="New Password">
                    {getFieldDecorator('password',{
                    })(<Input/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email',{
                        initialValue:this.props.dataList[this.props.index].user_email
                    })(<Input hidden={true} />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('id',{
                        initialValue:this.props.dataList[this.props.index].user_id
                    })(<Input hidden={true} />)}
                </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class ResetPassword extends Component {
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
      this.props.resetPassword(
          values["email"],
          values["password"],
          values["id"]
      );
      this.props.renderDataUser();
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
        <Button type="primary"  onClick={this.showModal}>Reset Password</Button>
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
  {resetPassword,renderDataUser}
)(ResetPassword);

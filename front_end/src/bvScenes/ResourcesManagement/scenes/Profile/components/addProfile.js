import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import actions from '../redux/profile/actions';

const FormItem = Form.Item;
const Option = SelectOption;

const {addProfile,renderDataProfile}=actions;

const CollectionCreateForm = Form.create()(
class extends React.Component {


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="New Profile"
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
                <FormItem label="Email">
                    {getFieldDecorator(
                        'email'
                    )(<Input/>)}
                </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class AddProfile extends Component {
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
      this.props.addProfile(
          values["name"],
          (values["email"]===undefined||values["email"]===""?"":values["email"])
      );
      this.props.renderDataProfile();
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
        <Button type="primary"  onClick={this.showModal}>Add Profile</Button>
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
  {addProfile,renderDataProfile}
)(AddProfile);

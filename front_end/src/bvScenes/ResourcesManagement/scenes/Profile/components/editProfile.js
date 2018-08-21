import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import actions from '../redux/profile/actions';

const FormItem = Form.Item;

const {editProfile,renderDataProfile}=actions;

const CollectionCreateForm = Form.create()(
class extends React.Component {


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit Profile"
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
                            initialValue:this.props.dataList[this.props.index].profile_name
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem label="Email">
                    {getFieldDecorator(
                        'email', {
                            initialValue:this.props.dataList[this.props.index].profile_email
                        }
                    )(<Input/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('id',{
                        initialValue:this.props.dataList[this.props.index].profile_id
                    })(<Input hidden={true} />)}
                </FormItem>
            </Form>
        </Modal>
      );
    }
  }
);

class EditProfile extends Component {
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
      this.props.editProfile(
          values["name"],
          (values["email"]===undefined||values["email"]===""?"":values["email"]),
          values["id"]
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
        <Button type="primary"  onClick={this.showModal}>Edit Profile</Button>
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
  {editProfile,renderDataProfile}
)(EditProfile);

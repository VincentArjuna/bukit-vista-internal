import React, { Component } from 'react';
import { Modal,Form } from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../../../bvComponents/Uielements/input';
import Notes from '../../../../../bvComponents/Notes';

const FormItem = Form.Item;
export default class extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Notes</Button>
        <Modal
          title="Add Notes"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        </Modal>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Modal,Form ,DatePicker} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import Select,{SelectOption}from '../../../../../bvComponents/Uielements/select';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../../../bvComponents/Uielements/input';
const FormItem = Form.Item;
const Option = SelectOption;
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
        <Button ghost onClick={this.showModal}>Edit</Button>
        <Modal
          title="Edit"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="Unit Name">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="ETA">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Check In">
              <DatePicker/>
            </FormItem>
            <FormItem label="Check Out">
              <DatePicker/>
            </FormItem>
            <FormItem label="LOS">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Driver">
              <Select>
              </Select>
            </FormItem>
            <FormItem label="Host">
              <Select>
              </Select>
            </FormItem>
            <FormItem label="Status">
              <Select>
              </Select>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

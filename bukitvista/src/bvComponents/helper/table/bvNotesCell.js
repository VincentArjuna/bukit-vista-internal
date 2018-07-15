import React, { Component } from 'react';
import Modal from '../feedback/modal';
import Form from '../uielements/form';
import Button from '../uielements/button';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../components/uielements/input';
import InputNumber from '../../../components/uielements/InputNumber';
import Select, { SelectOption } from '../../../components/uielements/select';
import DatePicker from '../../../components/uielements/datePicker';
import AutoComplete from '../../../components/uielements/autocomplete';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper.js';
import ContentHolder from '../../../components/utility/contentHolder';
//import Popconfirm from '../feedback/popconfirm';

export default class extends Component {
  margin = {
    margin: '0 0 8px 8px'
  };
  state = { visible: false }

   showModal = e => {
    e.preventDefault();
    this.setState({
      visible: true,
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

 handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const{ index, onDeleteCell } = this.props;  
    const FormItem = Form.Item;
    return (
      <div>
       <Button type="primary" style={this.margin} onClick={this.showModal}>Notes</Button>
        <Modal
          title="Add Notes"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="Unit Name">
              <Input />
            </FormItem>
            <FormItem label="ETA">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Guest Name">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Check In">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Check Out">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="LOS">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Driver">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Remarks">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Host">
              <Input type="textarea" />
            </FormItem>
            <FormItem label="Remarks">
              <Input type="Status" />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Form, Input,Box} from 'antd';
import Button from '../../../../../bvComponents/Uielements/button';
import aProperty from '../redux/property/actions';
import ViewInvoice from '../../Property/components/Invoice/viewInvoice.js';
const FormItem = Form.Item;


const CollectionCreateForm = Form.create()(
class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="View Property"
          cancelText="Back"
          onCancel={onCancel}
          width={"520"}
          footer={[
            <Button key="back" onClick={onCancel}>Return</Button>,
          ]}
        >
          <ViewInvoice dataList={this.props.dataList} index={this.props.index}/>
        </Modal>
      );
    }
  }
);

class DownloadCsvMonthly extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Button type="primary"  onClick={this.showModal}>View</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          dataList={this.props.dataList}
          index={this.props.index}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    Property:state.property,
    Searchbar:state.searchbar
  };
}
export default connect(
  mapStateToProps,null
)(DownloadCsvMonthly);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Modal,Form } from 'antd';
import Button from '../../../../../../bvComponents/Uielements/button';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../../../../bvComponents/Uielements/input';
import Notes from './components/index';
import actions from './redux/notes/actions';
import Spin from '../../../../../../bvComponents/Spin/spin.style';

const {renderNotes} = actions;
class NotesCell extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
    this.props.renderNotes(this.props.dataList[this.props.index].booking_id);
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Notes</Button>
        <Modal
          title="View Notes"
          visible={this.state.visible}
          onOk={this.handleCancel}
          okText="Back"
          closable={false}
          footer={[
            <Button type="primary" key="back" onClick={this.handleCancel}>Back</Button>,
          ]}
        >
          {this.props.Notes.loading ?
            <div style={{textAlign:"center"}}>
              <Spin size="large"/>
            </div>
          :
          <Notes
            notes={this.props.Notes.results}
            bookingId={this.props.dataList[this.props.index].booking_id}
          />
          }
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Notes:state.notes
  }
}
export default connect(mapStateToProps,{renderNotes})(NotesCell);

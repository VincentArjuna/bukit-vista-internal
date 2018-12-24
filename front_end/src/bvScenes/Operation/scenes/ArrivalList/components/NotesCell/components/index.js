import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Input from "../../../../../../../bvComponents/Uielements/input";
import Button from '../../../../../../../bvComponents/Uielements/button';
import { timeDifference } from '../../../../../../../helpers/utility';
import EditableComponent from '../../../../../../../bvComponents/EditableComponent';
import { TodoListWrapper } from './todo.style';
import { message } from 'antd';
import MessageContent from "../../../../../../../bvComponents/Message/message.style";
import actions from '../redux/notes/actions';

const {addNotes,deleteNotes,editNotes,renderNotes}=actions;
const { Header, Content } = Layout;

class NotesList extends Component {
  handleDelete=e=>{
    console.log(e.target.value);
    this.props.deleteNotes(e.target.value);
  };
  singleTodo(note,profile) {
    return (
      <div className="isoTodoList" key={note.note_id}>
        <div className="isoTodoContentWrapper">
          <span className="isoTodoDate">{timeDifference(note.created_at)} by {note.employee_name}</span>
          {note.user_id===profile?
          <EditableComponent
            value={note.note_text}
            itemKey="todo"
            notesId={note.note_id}
            userId={note.user_id}
            editNotes={this.props.editNotes}
            bookingId={this.props.booking}
          />:
            <div>
           {note.note_text}
           </div>
          }
        </div>
        {note.user_id===profile?
        <Button
          className="isoTodoDelete"
          icon="close"
          type="button"
          value={note.note_id}
          onClick={this.handleDelete}
        />:null}
      </div>
    );
  }
  render() {
    const {notes,profile}=this.props;
    return (
      <TodoListWrapper className="isoTodoContent">
        <div className="isoTodoListWrapper">
          {notes.length > 0 ? (
            notes.map(note => this.singleTodo(note,profile))
          ) : (
            <h3 className="isoNoTodoFound">No notes found</h3>
          )}
        </div>
      </TodoListWrapper>
    );
  }
}
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.Notes.notificationSuccess === true){
      console.log("success kepanggil")
      message.success(<MessageContent>{nextProps.Notes.message}</MessageContent>,3);
      this.props.renderNotes(this.props.bookingId);
    }
    if(nextProps.Notes.notificationFail === true){
      console.log("error kepanggil")
      message.error(<MessageContent>{nextProps.Notes.message}</MessageContent>,3);
      this.props.renderNotes(this.props.bookingId);
    }
}

  handleAdd=e=>{
    if(e.key==="Enter" && this.state.newTodo !== ""){
      this.props.addNotes(this.props.Auth.profile,this.props.bookingId,this.state.newTodo);
    }
  };

  handleChange=e=>{
    this.setState({ newTodo: e.target.value });
  };
  componentDidMount(){
    console.log("notes component did mount?");
  }
  render() {
    const {notes,Auth}=this.props;
    return (
      <Layout style={{ background: "none" }}>
          <Content className="isoTodoContentBody">
            <NotesList
              notes={notes}
              profile={Auth.profile}
              deleteNotes={this.props.deleteNotes}
              booking={this.props.bookingId}
              editNotes={this.props.editNotes}
            />
          </Content>
          <Input
            placeholder={"input your notes here..."}
            value={this.state.newTodo}
            className="isoTodoInput"
            onChange={this.handleChange}
            onKeyPress={this.handleAdd}
          />
      </Layout>

    );
  }
}

function mapStateToProps(state) {
  return {
    Notes:state.notes,
    Auth:state.Auth
  };
}
export default connect(mapStateToProps, {addNotes,editNotes,renderNotes,deleteNotes})(Notes);
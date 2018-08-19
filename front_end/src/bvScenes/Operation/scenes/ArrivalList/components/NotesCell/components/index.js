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

const {addNotes,renderNotes}=actions;
const { Header, Content } = Layout;

class NotesList extends Component {
  onDelete=(id)=>{
    console.log(id);
  };
  singleTodo(note,profile) {
    return (
      <div className="isoTodoList" key={note.note_id}>
        <div className="isoTodoContentWrapper">
          <span className="isoTodoDate">{timeDifference(note.created_at)} by {note.user_id}</span>
          {note.user_id===profile?
          <EditableComponent
            value={note.note_text}
            itemKey="todo"
            //onChange={updateTodo}
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
  handleAdd=()=>{
    this.props.addNotes(this.props.Auth.profile,this.props.bookingId,this.state.newTodo);
    this.setState({ newTodo: "" });
    this.props.renderNotes(this.props.bookingId);
    this.props.Notes.notificationSuccess=true;
    this.props.Notes.notificationLoading=false;

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
            />
          </Content>
          <Input
            placeholder={"input your notes here..."}
            value={this.state.newTodo}
            className="isoTodoInput"
            onChange={event => this.setState({ newTodo: event.target.value })}
            onPressEnter={event => {
              this.props.Notes.notificationLoading=true;
               this.handleAdd();
            }}
          />
          {this.props.Notes.notificationLoading? 
              message.loading(
              <MessageContent>Action in progress..</MessageContent>,
              0)
              :null
          }
          {this.props.Notes.notificationSuccess? 
              message.success(
                <MessageContent>
                  This is a prompt message for success, and it will disappear in 10 seconds
                </MessageContent>,
                3
              )
              :null
          }
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
export default connect(mapStateToProps, {addNotes,renderNotes})(Notes);

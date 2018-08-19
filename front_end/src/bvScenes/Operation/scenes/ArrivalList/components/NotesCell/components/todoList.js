import React, { Component } from 'react';
import Button from '../../../../../../../bvComponents/Uielements/button';
import Checkbox from '../../../../../../../bvComponents/Uielements/checkbox';
import { RadioButton, RadioGroup } from '../../../../../../../bvComponents/Uielements/radio';
import { timeDifference } from '../../../../../../../helpers/utility';
import notification from '../../../../../../../bvComponents/Notification';
import ColorChoser from '../../../../../../../bvComponents/ColorChoser';
import EditableComponent from '../../../../../../../bvComponents/EditableComponent';
import { TodoListWrapper } from './todo.style';

function filterTodos(todos, search) {
  const selectedTodos =
    search === 'All'
      ? todos
      : todos.filter(todo => todo.completed === (search === 'Completed'));
  let completed = 0;
  selectedTodos.forEach(todo => {
    if (todo.completed) {
      completed += 1;
    }
  });
  return { selectedTodos, completed };
}
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.singleTodo = this.singleTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: 'All',
    };
  }
  singleTodo(todo) {
    const { deleteTodo, colors } = this.props;
    const onDelete = () => deleteTodo(todo.id);
    const updateTodo = (key, value) => {
      todo[key] = value;
      this.props.edittodo(todo);
    };
    return (
      <div className="isoTodoList" key={todo.id}>
        <div className="isoTodoContentWrapper">
          <span className="isoTodoDate">{timeDifference(todo.createTime)}</span>
          <EditableComponent
            value={todo.todo}
            itemKey="todo"
            onChange={updateTodo}
          />
        </div>
        <Button
          className="isoTodoDelete"
          icon="close"
          type="button"
          onClick={onDelete}
        />
      </div>
    );
  }
  onChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const { search } = this.state;
    const { selectedTodos, completed } = filterTodos(this.props.todos, search);
    return (
      <TodoListWrapper className="isoTodoContent">

        <div className="isoTodoListWrapper">
          {selectedTodos.length > 0 ? (
            selectedTodos.map(note => this.singleTodo(note))
          ) : (
            <h3 className="isoNoTodoFound">No todo found</h3>
          )}
        </div>
      </TodoListWrapper>
    );
  }
}

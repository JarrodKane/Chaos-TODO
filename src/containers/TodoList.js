import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import TodoForm from "./TodoForm";
import Todo from "../components/Todo";

import {
  AddTodo,
  Chaos,
  removeTodo,
  editTodo
} from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: () => dispatch(AddTodo()),
  startChaos: () => dispatch(Chaos()),
  onRemoveTodo: id => dispatch(removeTodo(id)),
  onEditTodo: (id, todo) => dispatch(editTodo(id, todo))
});

class TodoList extends Component {
  handleChaos = () => {
    this.props.startChaos();
  };

  handleOnRemoveTodo = e => {
    const id = e.target.id;
    this.props.onRemoveTodo(id);
  };

  handleOnEditTodo = (id, todo) => {
    this.props.onEditTodo(id, todo);
  };

  render() {
    const { todoList } = this.props.todoReducer;
    let toDoDisplay = todoList;
    const listing = toDoDisplay.map(todo => (
      <Todo
        todo={todo}
        id={todo.id}
        key={todo.id}
        handleOnRemoveTodo={this.handleOnRemoveTodo}
        handleOnEditTodo={this.handleOnEditTodo}
      />
    ));

    // const {} = this.props;
    return (
      <div>
        <TodoForm />
        <button onClick={this.handleChaos}>Chaos My Life</button>
        {listing}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

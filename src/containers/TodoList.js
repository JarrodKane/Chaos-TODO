import React, { Component } from "react";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";
import Todo from "../components/Todo";

import { AddTodo, Chaos } from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: () => dispatch(AddTodo()),
  startChaos: () => dispatch(Chaos())
});

class TodoList extends Component {
  handleChaos = () => {
    this.props.startChaos();
  };

  render() {
    const { todoList } = this.props.todoReducer;
    console.log(todoList);
    let toDoDisplay = todoList;
    const listing = toDoDisplay.map(todo => <Todo todo={todo} />);

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

import React, { Component } from "react";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";

import { AddTodo } from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: () => dispatch(AddTodo())
});

class TodoList extends Component {
  render() {
    const { input } = this.props;
    return (
      <div>
        <TodoForm />
        {input}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

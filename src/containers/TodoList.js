import React, { Component } from "react";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";

import { todoAction } from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: () => dispatch(todoAction())
});

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

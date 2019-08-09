import React from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import { AddTodo, changeInput, removeTodo } from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: id => dispatch(AddTodo(id)),
  onInputChange: e => dispatch(changeInput(e.target.value))
});

//TODO: Grab the state of the input box
class TodoForm extends React.Component {
  handleAddTodo = event => {
    const id = uuid();
    this.props.todoAction(id);
    event.preventDefault();
  };

  render() {
    const { onInputChange } = this.props;
    const { input } = this.props.todoReducer;

    return (
      <div>
        <div>Content</div>
        <form onSubmit={this.handleAddTodo}>
          <label>New Todo</label>
          <input
            type="text"
            name="input"
            onChange={onInputChange}
            value={input}
          />
          <button>Add TODO</button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

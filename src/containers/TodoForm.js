import React from "react";
import { connect } from "react-redux";

import { AddTodo, changeInput } from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: () => dispatch(AddTodo()),
  onInputChange: e => dispatch(changeInput(e.target.value))
});

//TODO: Grab the state of the input box
class TodoForm extends React.Component {
  handleAddTodo = event => {
    this.props.todoAction();
    event.preventDefault();
  };

  render() {
    const { input, onInputChange } = this.props;

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

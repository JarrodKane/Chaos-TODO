import React from "react";
import { connect } from "react-redux";

import { todoAction, changeInput } from "../state/actions/todoAction";

//mapping all state to props
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  todoAction: () => dispatch(todoAction()),
  changeInput: () => dispatch(changeInput())
});

//TODO: Grab the state of the input box
class TodoForm extends React.Component {
  render() {
    const { input, changeInput } = this.props;

    return (
      <div>
        <div>Content</div>
        <form>
          <label>New Todo</label>
          <input type="text" name="todo" onChange={changeInput} value={input} />
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

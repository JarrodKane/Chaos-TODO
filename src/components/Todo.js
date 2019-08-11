import React from "react";
import "../styles/Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleChangeTodoState = this.handleChangeTodoState.bind(this);
  }

  handleChangeTodoState = () => {
    this.setState({ isEditing: !this.state.isEditing });
    this.setState({ todo: this.props.todo.todo });
  };

  handleSaveUpdate = e => {
    e.preventDefault();
    const id = e.target.id;
    const todo = this.state.todo;
    this.props.handleOnEditTodo(id, todo);
    this.setState({ isEditing: false });
    // TODO: This calls the update action from redux
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  updateForm = () => {
    return (
      <form>
        <input
          type="text"
          name="task"
          value={this.state.todo}
          onChange={this.handleChange}
        ></input>
        <button id={this.props.todo.id} onClick={this.handleSaveUpdate}>
          Save
        </button>
      </form>
    );
  };

  render() {
    let result;
    const { handleOnRemoveTodo } = this.props;
    const { todo, id } = this.props.todo;

    if (this.state.isEditing === false) {
      result = (
        <div className="todoBox" id={id} key={id}>
          <div className="todoText">{todo}</div>

          <button className="btnDelete" id={id} onClick={handleOnRemoveTodo}>
            Delete
          </button>
          <button
            className="btnEdit"
            id={id}
            onClick={this.handleChangeTodoState}
          >
            Edit
          </button>
        </div>
      );
    } else {
      result = this.updateForm();
    }
    return result;
  }
}

export default Todo;

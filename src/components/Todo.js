import React from "react";

const Todo = props => {
  const { handleOnRemoveTodo } = props;
  const { todo, id } = props.todo;
  return (
    <div id={id} key={id}>
      {todo}
      <button id={id} onClick={handleOnRemoveTodo}>
        Delete
      </button>
    </div>
  );
};

export default Todo;

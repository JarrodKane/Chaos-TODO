import React from "react";

const Todo = props => {
  const { todo } = props;

  return (
    <div>
      <div>{todo}</div>
    </div>
  );
};

export default Todo;

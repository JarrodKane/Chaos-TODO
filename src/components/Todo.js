import React from "react";

const Todo = props => {
  const { todo, id } = props.todo;
  console.log(props);
  return (
    <div id={id} key={id}>
      {todo}
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./styles/chaosTodo.css";

export default function ChaosTodo() {
  const [todoList, setTodoList] = useState([
    { id: `1`, content: `Fill car`, status: false },
  ]);

  const addTodo = (todo) => {
    let newTodo = { id: uuidv4(), content: todo, status: false };
    setTodoList((oldArr) => [...oldArr, newTodo]);
    // console.log(newTodo);
  };

  let todosDisp = todoList.map((todo) => <Todo content={todo.content} />);

  return (
    <div className="ChaosTodo">
      <TodoForm addTodo={addTodo} />
      <div>{todosDisp}</div>
    </div>
  );
}

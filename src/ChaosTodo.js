import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./styles/chaosTodo.css";

export default function ChaosTodo() {
  const [todoList, setTodoList] = useState([
    { iD: `1`, content: `Fill car`, status: false },
    {
      iD: "2",
      content: `Fill cardddddddddddddddddddddddddddddddddddddddddddddddddddddddddd`,
      status: false,
    },
  ]);

  //Filters though the array of the iD given, once found it will return a new array that has everything except for that found value
  const removeTodo = (iD) => {
    console.log(iD);
    setTodoList((oldArr) => oldArr.filter((todo) => todo.iD !== iD));
  };

  const addTodo = (todo) => {
    let newTodo = { iD: uuidv4(), content: todo, status: false };
    setTodoList((oldArr) => [...oldArr, newTodo]);
  };

  let todosDisp = todoList.map((todo) => (
    <Todo
      key={todo.iD}
      content={todo.content}
      removeTodo={removeTodo}
      iD={todo.iD}
    />
  ));

  return (
    <div className="ChaosTodo">
      <TodoForm addTodo={addTodo} />
      <div>{todosDisp}</div>
    </div>
  );
}

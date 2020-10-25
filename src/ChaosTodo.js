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
    setTodoList((oldArr) => oldArr.filter((todo) => todo.iD !== iD));
  };

  //Input checking, making sure that there's something entered before it's added
  const addTodo = (todo) => {
    if (todo.length === 0 ) {
    } else {
    let newTodo = { iD: uuidv4(), content: todo, status: false };
    setTodoList((oldArr) => [...oldArr, newTodo]);
    }
  };

  //Takes in the new content from the edit form, and also takes the id of the todo, it then makes a copy of the current state, changes this, and then updates the state to the new state
  const editTodo = (upTodo, iD) => {
   let newArr = todoList.slice()
   for (let i = 0; i < newArr.length; i++) {
     if (newArr[i].iD === iD ) {
       newArr[i].content = upTodo
       break;
     }
   }
   setTodoList(newArr);
  };

  const changeStatus = (iD) =>{
    let newArr = todoList.slice()
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].iD === iD ) {
        newArr[i].status = !newArr[i].status 
        break;
      }
    }
    setTodoList(newArr);
   };
  


  let todosDisp = todoList.map((todo) => (
    <Todo
      key={todo.iD}
      content={todo.content}
      removeTodo={removeTodo}
      iD={todo.iD}
      editTodo={editTodo}
      status={todo.status}
      changeStatus={changeStatus}
    />
  ));

  return (
    <div className="ChaosTodo">
      <h1>CHAOS TODO</h1>
      <TodoForm addTodo={addTodo} btn="Add" />
      <div>{todosDisp}</div>
    </div>
  );
}

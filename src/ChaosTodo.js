import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

const Shuffle = styled.button`
  width: 100px;
  align-self: center;
  background: white;
  border-radius: 3px;
  color: black;
  padding: 1em 2em;
  margin: 1.5em;
`;

const Title = styled.h1`
  color: white;
  filter: drop-shadow(30px 10px 4px #00000);
`;

const TodoChaos = styled.div`
  margin: 5em;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  background-color: #7805fa;
  border: 3px solid rgb(41, 0, 0);
  border-radius: 5px;
  padding: 10px;
`;

export default function ChaosTodo() {
  const [todoList, setTodoList] = useState([
    { iD: `1`, content: `Fill car`, status: false },
    {
      iD: "2",
      content: `Fill cardddddddddddddddddddddddddddddddddddddddddddddddddddddddddd`,
      status: false,
    },
  ]);

  // TODO - Create CSS for Button and layout using styled components

  //Filters though the array of the iD given, once found it will return a new array that has everything except for that found value
  const removeTodo = (iD) => {
    setTodoList((oldArr) => oldArr.filter((todo) => todo.iD !== iD));
  };

  //Input checking, making sure that there's something entered before it's added
  const addTodo = (todo) => {
    if (todo.length === 0) {
    } else {
      let newTodo = { iD: uuidv4(), content: todo, status: false };
      setTodoList((oldArr) => [...oldArr, newTodo]);
    }
  };

  //Takes in the new content from the edit form, and also takes the id of the todo, it then makes a copy of the current state, changes this, and then updates the state to the new state
  const editTodo = (upTodo, iD) => {
    let newArr = todoList.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].iD === iD) {
        newArr[i].content = upTodo;
        break;
      }
    }
    setTodoList(newArr);
  };

  const changeStatus = (iD) => {
    let newArr = todoList.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].iD === iD) {
        newArr[i].status = !newArr[i].status;
        break;
      }
    }
    setTodoList(newArr);
  };

  //Using Fisher-Yates algorithim to randomize the order
  const shuffleOrder = () => {
    let oldArr = todoList.slice();
    for (let i = oldArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [oldArr[i], oldArr[j]] = [oldArr[j], oldArr[i]];
    }
    setTodoList(oldArr);
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

  const onDragEnd = (result) => {};

  return (
    <TodoChaos className="ChaosTodo">
      <Title>CHAOS TODO</Title>
      <Shuffle onClick={shuffleOrder}>Shuffle</Shuffle>
      <TodoForm addTodo={addTodo} btn="Add" />
      <DragDropContext onDragEnd={onDragEnd}>
        <div>{todosDisp}</div>
      </DragDropContext>
    </TodoChaos>
  );
}

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

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
  filter: drop-shadow(0px 5px 4px #000000);
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
  let wow = new Audio("/Wow.mp3");
  let almost = new Audio("/almost.mp3");
  let bell = new Audio("/Bell.mp3");
  let dolphin = new Audio("/dolphin.mp3");

  const [todoList, setTodoList] = useState([
    { iD: `1`, content: `Fill car`, status: false },
    {
      iD: "2",
      content: `Fill sadas`,
      status: false,
    },
  ]);

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

    bell.volume = 0.1;
    bell.play();
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

    const statusTotal = checkStatusTotal();
    if (statusTotal === 0) {
      dolphin.volume = 0.1;
      dolphin.play();
    } else if (statusTotal !== 1) {
      OwenMe();
    }
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

  // This allows people to drag the tasks into what ever order they wish
  const onDragEnd = (result) => {
    let curArr = todoList.slice();
    let resultObj = curArr[result.source.index];
    curArr = curArr.filter((todo) => todo.iD !== result.draggableId);
    curArr.splice(result.destination.index, 0, resultObj);

    setTodoList(curArr);
  };

  const OwenMe = () => {
    wow.volume = 0.3;
    wow.play();
  };

  let checkStatusTotal = () => {
    let newArr = todoList.slice();
    let totalFalse = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].status === false) {
        totalFalse = totalFalse + 1;
      }
    }
    return totalFalse;
  };

  useEffect(() => {
    if (checkStatusTotal() === 1) {
      almost.volume = 0.1;
      almost.play();
    }
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TodoChaos className="ChaosTodo">
        <Title>CHAOS TODO</Title>
        <Shuffle onClick={shuffleOrder}>Shuffle</Shuffle>
        <TodoForm addTodo={addTodo} btn="Add" />
        <Column
          key={1}
          column={1}
          todos={todoList}
          removeTodo={removeTodo}
          editTodo={editTodo}
          changeStatus={changeStatus}
        />
      </TodoChaos>
    </DragDropContext>
  );
}

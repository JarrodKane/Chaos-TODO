import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { audioCall } from "./Sounds";
import dolphinImage from "./imgs/dolphin.png";

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
//  background-color: ${(props) => props.doneColor}

const TodoChaos = styled.div`
  background-image: url(${(props) =>
    props.allComplete === true ? dolphinImage : ""});
  background-position: 70% 5px;
  background-repeat: no-repeat;
  margin: 5em;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #7805fa;
  border: 3px solid rgb(41, 0, 0);
  border-radius: 5px;
  padding: 10px;
`;

export default function ChaosTodo() {
  const savedItems = JSON.parse(localStorage.getItem("myTasks"));
  //If there is no locally saved data, it will be set to a empty array
  const [todoList, setTodoList] = useState(savedItems || []);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [allComplete, setAllComplete] = useState(false);

  // This will store your tasks locally only when there is a change in the state of todoList
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(todoList));
  }, [todoList]);

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

    if (audioEnabled) {
      audioCall("Bell");
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
    let oldStatus;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].iD === iD) {
        oldStatus = newArr[i].status;
        newArr[i].status = !newArr[i].status;
        break;
      }
    }

    const statusTotal = checkStatusTotal();
    setTodoList(newArr);

    // Added in oldStatus to prevent sounds from playing when someone is unticking a box
    if (!oldStatus) {
      playAudio(statusTotal);
    }
  };

  // When passed the audio number it will play the correct sound effect
  // First checks if audio is enabled
  const playAudio = (statusTotal) => {
    if (audioEnabled) {
      if (statusTotal === 0) {
        audioCall("dolphin");
      } else if (statusTotal === 1) {
        audioCall("almost");
      } else {
        audioCall("Wow");
      }
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

  let checkStatusTotal = () => {
    let newArr = todoList.slice();
    let totalFalse = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].status === false) {
        totalFalse = totalFalse + 1;
      }
    }
    totalFalse < 1 ? setAllComplete(true) : setAllComplete(false);
    return totalFalse;
  };

  //Switches the audio to being true or false to play sounds
  const switchAudio = () => {
    setAudioEnabled((state) => !state);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TodoChaos className="ChaosTodo" allComplete={allComplete}>
        <Title>CHAOS TODO</Title>
        <div>
          <Shuffle onClick={shuffleOrder}>Shuffle</Shuffle>
          <Shuffle onClick={switchAudio}>Audio</Shuffle>
        </div>
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

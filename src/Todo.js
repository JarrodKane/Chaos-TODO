import React, {useState} from "react";
import styled from "styled-components";
import TodoForm from './TodoForm'

const TodoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fa7805;
  border: 2px solid black;
  font-size: 1.4em;
  padding: 0.3em;
  margin: 0.3em;
  word-wrap: break-word;
  border-radius: 5px;
`;

const DelButton = styled.button`
  background: #ff3939;
  border-radius: 3px;
  color: black;
  padding: 0.8em 1.5em;
`;

const EditButton = styled.button`
  background: #ff3939;
  border-radius: 3px;
  color: black;
  padding: 0.8em 1em;
`;

const Buttons = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Content = styled.div`
  max-width: 75%;
`;

export default function Todo({ content, removeTodo, iD, editTodo }) {

  const [isEditing, setIsEditing] = useState(false)

  const changeTodoStatus =() =>{
    setIsEditing(!isEditing)
  }

if (isEditing) {
  return (<TodoForm btn="Edit" iD={iD} content={content} editTodo={editTodo} changeTodoStatus={changeTodoStatus}/>)
  
} else {
  return (
    <TodoDiv key={iD} className="Todo">
      <Content>{content}</Content>
      <Buttons>
        <DelButton onClick={() => removeTodo(iD)}>X</DelButton>
        <EditButton onClick={changeTodoStatus} >Edit</EditButton>
      </Buttons>
    </TodoDiv>
  );
}
}

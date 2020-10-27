import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import { Draggable } from "react-beautiful-dnd";

const TodoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${(props) => props.doneColor}
  transition: .8s;
  border: 2px solid black;
  font-size: 1.4em;
 padding: 0.3em;
margin: 0.3em;
  word-wrap: break-word;
  border-radius: 5px;
`;

const DelButton = styled.button`
  background: white;
  border-radius: 3px;
  color: black;
  padding: 0.8em 1.5em;
`;

const EditButton = styled.button`
  background: white;
  border-radius: 3px;
  color: black;
  padding: 0.8em 1em;
  margin: 0.3em;
`;

const Buttons = styled.div`
  flex-grow: 1;
`;

const Content = styled.div`
text-decoration: ${(props) => props.strike}
  flex-grow: 1;  
  text-align: left;
  flex-shrink: 1;
  word-break:break-all;
  width: 100%;
//max-width: 75%;
`;

export default function Todo({
  content,
  removeTodo,
  iD,
  editTodo,
  status,
  changeStatus,
  index,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const changeTodoStatus = () => {
    setIsEditing(!isEditing);
  };

  //This is the variable that's passed into the styled-comp. This way if the todo is complete it changed
  let strike = status ? "line-through;" : "none;";
  let doneColor = status ? "grey;" : "#fa7805;";

  if (isEditing) {
    return (
      <TodoForm
        btn="Edit"
        iD={iD}
        content={content}
        editTodo={editTodo}
        changeTodoStatus={changeTodoStatus}
      />
    );
  } else {
    return (
      <Draggable draggableId={iD} index={index}>
        {(provided) => (
          <TodoDiv
            key={iD}
            className="Todo"
            doneColor={doneColor}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Content strike={strike} onClick={() => changeStatus(iD)}>
              {content}
            </Content>
            <Buttons>
              <DelButton onClick={() => removeTodo(iD)}>X</DelButton>
              <EditButton onClick={changeTodoStatus}>Edit</EditButton>
            </Buttons>
          </TodoDiv>
        )}
      </Draggable>
    );
  }
}

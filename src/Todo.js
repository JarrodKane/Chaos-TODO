import React from "react";
import styled from "styled-components";

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

export default function Todo({ content, removeTodo, iD }) {
  console.log(iD);
  return (
    <TodoDiv key={iD} className="Todo">
      <Content>{content}</Content>
      <Buttons>
        <DelButton onClick={() => removeTodo(iD)}>X</DelButton>
        <EditButton>Edit</EditButton>
      </Buttons>
    </TodoDiv>
  );
}

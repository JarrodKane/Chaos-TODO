import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  // flex-direction: row;
  padding: 10px;
  font-size: 50px;
  align-items: center;
`;
const Input = styled.input`
  flex-grow: 1;
  height: 1.8em;
  font-size: 0.4em;
  border-radius: 5px;
`;
const Button = styled.button`
  background: white;
  border-radius: 3px;
  color: black;
  padding: 1em 2em;
  margin: 0.5em;
`;

export default function TodoForm({
  addTodo,
  btn,
  content = "",
  iD,
  editTodo,
  changeTodoStatus,
}) {
  const [formInput, setFormInput] = useState(content);

  const handleChange = (evt) => {
    setFormInput(evt.target.value);
  };

  const handleSubmission = (evt) => {
    evt.preventDefault();

    if (btn === "Add") {
      addTodo(formInput);
      setFormInput("");
    } else {
      editTodo(formInput, iD);
      changeTodoStatus();
    }
  };

  // This form is used for both adding and editing a todo.
  //If a todo btn has the value "Add" in it, it'll give the add form, otherwise it'll give the edit form
  if (btn === "Add") {
    return (
      <Form onSubmit={handleSubmission}>
        <Input
          data-testid="todoInput"
          id="todoInput"
          type="text"
          name="todoInput"
          onChange={handleChange}
          value={formInput}
        ></Input>
        <Button>{btn}</Button>
      </Form>
    );
  } else {
    return (
      <Form onSubmit={handleSubmission}>
        <Input
          type="text"
          name="todoInput"
          onChange={handleChange}
          value={formInput}
        ></Input>
        <Button>{btn}</Button>
      </Form>
    );
  }
}

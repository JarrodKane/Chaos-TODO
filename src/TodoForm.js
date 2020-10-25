import React, { useState } from "react";

export default function TodoForm({ addTodo, btn, content, iD , editTodo, changeTodoStatus}) {
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
      editTodo(formInput, iD)
      changeTodoStatus()
    }
  };

  // This form is used for both adding and editing a todo.
  //If a todo btn has the value "Add" in it, it'll give the add form, otherwise it'll give the edit form
  if (btn === "Add") {
    return (
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          name="todoInput"
          onChange={handleChange}
          value={formInput}
        ></input>
        <button>{btn}</button>
      </form>
    ); 
  } else {
  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        name="todoInput"
        onChange={handleChange}
        value={formInput}
      ></input>
      <button>{btn}</button>
    </form>
  );
  }
}
import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [formInput, setFormInput] = useState();

  const handleChange = (evt) => {
    setFormInput(evt.target.value);
  };

  const handleSubmission = (evt) => {
    evt.preventDefault();
    addTodo(formInput);
    setFormInput("");
  };

  return (
    <form onSubmit={handleSubmission}>
      <label htmlFor="todoInput">Todo</label>
      <input
        type="text"
        name="todoInput"
        onChange={handleChange}
        value={formInput}
      ></input>
      <button>Add</button>
    </form>
  );
}

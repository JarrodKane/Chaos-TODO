export const changeInput = text => ({
  type: "INPUT_CHANGE",
  payload: text
});

export const AddTodo = id => ({
  type: "ADD_TODO",
  payload: id
});

export const Chaos = () => ({
  type: "CHAOS"
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  payload: id
});

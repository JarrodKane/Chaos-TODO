const initialState = {
  input: "",
  todoList: ["sd"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, input: action.payload };
    case "ADD_TODO":
      return { ...state, todoList: [...state.todoList, state.input] };
    case "REMOVE_TODO":
      return {
        result: action.payload
      };
    case "MARK_TODO":
      return {
        result: action.payload
      };
    case "EDIT_TODO":
      return {
        result: action.payload
      };
    case "SHUFFLE_TODO_LIST":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};

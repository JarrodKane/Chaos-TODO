const initialState = {
  input: "",
  todoList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, input: action.payload };
    case "ADD_TODO":
      const add = { todo: state.input, id: action.payload };
      return {
        ...state,
        todoList: [...state.todoList, add],
        input: ""
      };
    case "REMOVE_TODO":
      const id = action.payload;
      return {
        ...state,
        todoList: state.todoList.filter(t => t.id !== id)
      };
    case "MARK_TODO":
      return {
        result: action.payload
      };
    case "EDIT_TODO":
      return {
        result: action.payload
      };
    case "CHAOS":
      //Durstenfeld shuffle
      let array = state.todoList;

      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return { ...state, todoList: array };
    default:
      return state;
  }
};

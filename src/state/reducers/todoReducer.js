export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        result: action.payload
      };
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

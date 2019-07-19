export const todoAction = data => dispatch => {
  dispatch({
    type: "ADD_TODO",
    payload: data
  });
};

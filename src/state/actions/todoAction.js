export const changeInput = text => ({
  type: "CHANGE_INPUT",
  payload: text
});

export const todoAction = data => dispatch => {
  dispatch({
    type: "ADD_TODO",
    payload: data
  });
};

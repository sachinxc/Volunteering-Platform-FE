export const startLoading = () => (dispatch) => {
  dispatch({
    type: "START_LOADING",
    payload: true,
  });
};

export const stopLoading = () => (dispatch) => {
  dispatch({
    type: "STOP_LOADING",
  });
};

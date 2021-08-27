export default function createRequestThunk(type) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (param) => (dispatch) => {
    dispatch({ type });
    console.log(type);
    setTimeout(() => {
      console.log(SUCCESS);
      dispatch({ type: SUCCESS, payload: param });
      setTimeout(() => {
        console.log(FAILURE);
        dispatch({ type: FAILURE });
      }, 2000);
    }, 2000);
  };
}

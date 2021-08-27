import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
// #1 액션 정의
const INCREASE = "counter/INCREASE";
const INCREASE_SUCCESS = "counter/INCREASE_SUCCESS";
const INCREASE_FAILURE = "counter/INCREASE_FAILURE";
const DECREASE = "counter/DECREASE";
const DECREASE_SUCCESS = "counter/DECREASE_SUCCESS";
const DECREASE_FAILURE = "counter/DECREASE_FAILURE";

// #2 액션(객체)생성함수
export const increase = createAction(INCREASE, (num) => num);
export const decrease = createAction(DECREASE, (num) => num);
export const increaseAsync = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREASE_SUCCESS, payload });
    }, 1000);
  };
};
export const decreaseAsync = createRequestThunk(DECREASE);

// #3 초기상태
const initialState = { count: 0, loading: false };

// const arrow1 = () => {console.log("abc");};
// const arrow2 = () => 0;
// const arrow3 = () => (0);
// const arrow4 = () => { return {name:"김경훈",age:28}};
// const arrow5 = () => ({name:"김경훈",age:28});
// #4 리듀서
const reducer = handleActions(
  {
    // [INCREASE]: (state, action) => state,
    [INCREASE]: (state, action) => ({ ...state, loading: true }),
    [INCREASE_SUCCESS]: (state, { payload: num }) => ({
      count: state.count + num,
      loading: false,
    }),
    [INCREASE_FAILURE]: (state) => ({
      count: state.count,
      loading: false,
    }),
    [DECREASE]: (state, action) => ({ ...state, loading: true }),
    [DECREASE_SUCCESS]: (state, { payload: num }) => ({
      count: state.count - num,
      loading: false,
    }),
    [DECREASE_FAILURE]: (state) => ({
      count: state.count,
      loading: false,
    }),
  },
  initialState
);

export default reducer;

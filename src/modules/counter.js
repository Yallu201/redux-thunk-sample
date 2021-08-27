// #1 액션 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// #2 액션(객체)생성함수
export const increase = (payload) => ({ type: INCREASE, payload });
export const decrease = (payload) => ({ type: DECREASE, payload });

// #3 초기상태
const initialState = { count: 0 };

// #4 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + action.payload };
    case DECREASE:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export default reducer;

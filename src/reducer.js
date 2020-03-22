import types from "./types";
const { GET_USERS, INCREMENT, INCREMENT_BY_NUM, DECREMENT, GET_NAME } = types;

export const initialState = {
  count: 0,
  name: "",
  data: []
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: [...action.payload]
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case INCREMENT_BY_NUM:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case GET_NAME:
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
};

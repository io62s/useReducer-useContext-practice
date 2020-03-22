import types from "./types";
const { INCREMENT_BY_NUM, GET_NAME } = types;

export const incrementByNum = num => {
  return {
    type: INCREMENT_BY_NUM,
    payload: num
  };
};

export const setName = name => {
  return {
    type: GET_NAME,
    payload: name
  };
};

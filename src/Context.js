import React, { createContext, useReducer } from "react";
import { incrementByNum, setName } from "./actions";
import types from "./types";
import { mainReducer, initialState } from "./reducer";
import axios from "axios";

const { GET_USERS } = types;

export const CountContext = createContext();

export const fetchData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const CountState = props => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const getUser = async () => {
    const users = await fetchData();

    return dispatch({
      type: GET_USERS,
      payload: users
    });
  };

  return (
    <CountContext.Provider
      value={{
        count: state.count,
        data: state.data,
        name: state.name,
        dispatch,
        incrementByNum,
        getUser,
        setName
      }}
    >
      {props.children}
    </CountContext.Provider>
  );
};

export default CountState;

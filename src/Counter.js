import React, { useContext } from "react";
import { CountContext } from "./Context";

const Counter = () => {
  const counter = useContext(CountContext);
  const { count, dispatch, incrementByNum } = counter;

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementByNum(5))}>Increment</button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        onKeyDown={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

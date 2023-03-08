import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./Redux/actionCreation";

const Counter = () => {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;

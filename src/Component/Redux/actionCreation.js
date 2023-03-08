import { DECREES, INCREASE, RESET } from "./actionType";

export const increment = () => {
  return {
    type: INCREASE,
  };
};

export const decrement = () => {
  return {
    type: DECREES,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

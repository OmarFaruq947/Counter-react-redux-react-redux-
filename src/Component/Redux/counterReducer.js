import { DECREES, INCREASE, RESET } from "./actionType";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREES:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
};

export default counterReducer;

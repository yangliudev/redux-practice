import { FETCH_POSTS } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

const shopReducer = (state = initialState, action) => {
  console.log("entered shopReducer");
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

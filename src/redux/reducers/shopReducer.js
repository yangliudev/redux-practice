import { SELECTED_SHOP_ITEM } from "../actions/constants";

const initialState = {
  shopObject: {},
};

const shopReducer = (state = initialState, action) => {
  console.log("entered shopReducer");
  switch (action.type) {
    case SELECTED_SHOP_ITEM:
      return {
        ...state,
        shopObject: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

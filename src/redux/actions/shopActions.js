import { SELECTED_SHOP_ITEM } from "./constants";

export const fetchJSON = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        constant: SELECTED_SHOP_ITEM,
        payload: posts,
      })
    );
};

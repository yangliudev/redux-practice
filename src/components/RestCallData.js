import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJSON } from "../redux/actions/postActions";

const RestCallData = () => {
  const jsonData = useSelector((state) => state.post);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchJSON());
    console.log("post fetchJSON");
  }, [dispatch]);

  return (
    <div>
      <h2>rest call {JSON.stringify(jsonData)}</h2>
    </div>
  );
};

export default RestCallData;

import React from "react";

import { fetchJSON } from "../redux/actions/shopActions";

const RestCallData = () => {
  React.useEffect(() => {
    fetchJSON();
  }, []);

  return (
    <div>
      <h2>rest call</h2>
    </div>
  );
};

export default RestCallData;

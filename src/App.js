import React from "react";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";

import RestCallData from "./components/RestCallData";

function App() {
  return (
    <Provider store={reduxStore}>
      <div>
        <h1>hello world</h1>
      </div>
      <RestCallData />
    </Provider>
  );
}

export default App;

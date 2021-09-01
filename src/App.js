import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import RestCallData from "./components/RestCallData";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>hello world</h1>
      </div>
      <RestCallData />
    </Provider>
  );
}

export default App;

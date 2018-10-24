import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import Main from "./components/Main";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(<App />, document.getElementById("app"));

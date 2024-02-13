import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AddTodo from "./containers/AddTodo";
import rootReducer from "./reducers";

const initialStore = createStore(rootReducer);
const rootElement = document.createElement("div");
rootElement.setAttribute("id", "root");
document.getElementsByTagName("body")[0].appendChild(rootElement);
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={initialStore}>
    <AddTodo />
    <div id="App"></div>
  </Provider>
);

const renderMicrofrontendScreen = () => {
  (window as any).renderForm(initialStore, "App");
}

const scriptId = `script-test`;
if (document?.getElementById(scriptId)) {
  renderMicrofrontendScreen();
} else {
  const script = document.createElement('script');
  script.id = scriptId;
  script.crossOrigin = '';
  script.src = 'http://localhost:9001/index.js';
  script.onload = () => renderMicrofrontendScreen();
  document.head.appendChild(script);
}

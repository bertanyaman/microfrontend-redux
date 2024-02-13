import React from "react";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";
import { Provider } from "react-redux";
import { Root, createRoot } from "react-dom/client";

let root: Root = null;

export const ReduxContext = React.createContext(null);

(window as any).renderForm = (store: any, containerId: string) => {
  const contentId = `${containerId}_content`;
  let content = document.getElementById(contentId);
  if (!content) {
    content = document.createElement("div");
    content.setAttribute("id", contentId);
    const container = document.getElementById(containerId);
    container.appendChild(content);
    root = createRoot(content);
  }

  root.render(
    <Provider store={store}>
      <div>
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  );
};
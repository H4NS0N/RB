import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ArticlesContextProvider } from "./context/ArticlesContext";
import { AuthContextProvider } from "./context/AuthContext";
import { PostsContextProvider } from "./context/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ArticlesContextProvider>
        <PostsContextProvider>
          <App />
        </PostsContextProvider>
      </ArticlesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

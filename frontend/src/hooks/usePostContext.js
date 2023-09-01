import { PostsContext } from "../context/PostsContext";
import { useContext } from "react";

export const usePostsContext = () => {
  const context = useContext(PostsContext);

  if (!context) {
    throw Error("usePostsContext skal være inde under PostContextProvider");
  }
  return context;
};

import { ArticlesContext } from "../context/ArticlesContext";
import { useContext } from "react";

export const useArticlesContext = () => {
  const context = useContext(ArticlesContext);

  if (!context) {
    throw Error(
      "useArticlesContext skal være inde under ArticleContextProvider"
    );
  }
  return context;
};

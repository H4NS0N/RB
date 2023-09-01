import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ArticleForm from "../components/articleForm.js";
import { useArticlesContext } from "../hooks/useArticlesContext.js";
import ArticleDetails from "../components/ArticleDetails.js";

/*import { useAuthContext } from '../hooks/useAuthContext.js'*/

const Nyheder = () => {
  const { articles, dispatch } = useArticlesContext();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles/");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTICLES", payload: json });
      }
    };

    fetchArticles();
  });

  return (
    <Box
      sx={{
        mx: "20%",
        mb: "5%",
      }}
    >
      <Grid container spacing={2} columns={100}>
        <Grid item xs={70}>
          {articles &&
            articles.map((article) => (
              <ArticleDetails key={article._id} article={article} />
            ))}
        </Grid>
        <Grid item xs={25}>
          <ArticleForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nyheder;

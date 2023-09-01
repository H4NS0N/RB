import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Link, Button, CardActions } from "@mui/material";
import { useArticlesContext } from "../hooks/useArticlesContext";
import Nyhed1 from "../images/nyhed/nyhed-1.png";

import { useAuthContext } from "../hooks/useAuthContext.js";

const ArticleDetails = ({ article }) => {
  const { dispatch } = useArticlesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/articles/" + article._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ARTICLE", payload: json });
    }
  };

  return (
    <Card sx={{ maxWidth: 600, my: "5%", display: "flex" }}>
      <CardMedia
        sx={{ width: 225, height: 180, alignItems: "center" }}
        component="img"
        image={Nyhed1}
        alt="article"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            backgroundColor: "#ffffff",
            minHeight: "80px",
            maxHeight: "120px",
          }}
        >
          <Typography variant="h5">
            <Link href="/artikel" underline="hover" color="inherit">
              {article.title}
            </Link>
          </Typography>
        </CardContent>
        <CardActions>
        {user && (
                <Button variant="contained" color="error" onClick={handleClick}>
                Slet
              </Button>
              )}
        </CardActions>
      </Box>
    </Card>
  );
};

export default ArticleDetails;

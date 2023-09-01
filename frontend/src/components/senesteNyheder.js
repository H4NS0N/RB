import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const SenesteNyheder = (props) => {
  return (
    <Card sx={{ mx: "1%", boxShadow: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={props.image} alt="nyheds artikel" />
        <CardContent
          sx={{
            backgroundColor: "#2669A4",
            minHeight: "120px",
          }}
        >
          <Typography gutterBottom variant="latestNewsTitle" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          backgroundColor: "#2669A4",
        }}
      >
        <Typography variant="latestNewsDate">{props.date}</Typography>
      </CardActions>
    </Card>
  );
};

export default SenesteNyheder;

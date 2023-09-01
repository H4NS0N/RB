import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import { ReplySharp, ThumbUpSharp } from "@mui/icons-material";
import cardOpslag1 from "../images/opslag/cardOpslag-1.png";

const PostDetails = ({ post }) => {
  const savedTime = post.createdAt;
  const formattedDate = new Date(savedTime).toLocaleString("da-DK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Card
      sx={{
        maxWidth: 350,
        mb: "10%",
        boxShadow: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <CardHeader
          avatar={
            <Avatar alt="RB Logo" src={require("../images/logo/RBLogo.png")} />
          }
          title="RB 1906"
          subheader={formattedDate}
        ></CardHeader>
        <CardContent
          sx={{
            p: 0,
          }}
        >
          <CardMedia
            component="img"
            image={cardOpslag1}
            alt="opslag"
            height={180}
          />
          <Typography fontSize={18} mt="4%" mx="4%">
            {post.text}
          </Typography>
        </CardContent>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpSharp>{post.likes}</ThumbUpSharp>
        </IconButton>
        <IconButton aria-label="share">
          <ReplySharp />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostDetails;

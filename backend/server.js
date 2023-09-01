require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const articleRoutes = require("./routes/articles");
const userRoutes = require("./routes/user");
const mediaRoutes = require("./routes/posts");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/articles", articleRoutes);
app.use("/api/posts", mediaRoutes);
app.use("/api/user", userRoutes);

// forbindelse til db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // lyt efter requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

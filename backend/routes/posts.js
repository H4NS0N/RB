const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
} = require("../controllers/postController");

const router = express.Router();

//GET all media posts
router.get("/", getPosts);

//GET a media post
router.get("/:id", getPost);

//POST a media post
router.post("/", createPost);

module.exports = router;

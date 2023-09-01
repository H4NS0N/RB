const Post = require("../models/postModel");
const mongoose = require("mongoose");

// get all articles
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// get a single article
const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

// create new article
const createPost = async (req, res) => {
  const { text } = req.body;

  let emptyFields = [];
  if (!text) {
    emptyFields.push("text");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const post = await Post.create({ text });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
};

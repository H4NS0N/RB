const Article = require("../models/articleModel");
const mongoose = require("mongoose");

// get all articles
const getArticles = async (req, res) => {
  const articles = await Article.find({}).sort({ createdAt: -1 });

  res.status(200).json(articles);
};

// get a single article
const getArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such article" });
  }

  const article = await Article.findById(id);

  if (!article) {
    return res.status(404).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

// create new article
const createArticle = async (req, res) => {
  const { title, text } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!text) {
    emptyFields.push("text");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const article = await Article.create({ title, text });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an article
const deleteArticle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such article" });
  }

  const article = await Article.findOneAndDelete({ _id: id });

  if (!article) {
    return res.status(404).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

// updated an article
const updateArticle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such article" });
  }

  const article = await Article.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!article) {
    return res.status(404).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  deleteArticle,
  updateArticle,
};

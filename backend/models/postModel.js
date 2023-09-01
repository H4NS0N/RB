const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postSchema);

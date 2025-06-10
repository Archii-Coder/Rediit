const { required } = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
      maxLength: 100,
      trim: true,
    },
    content: {
      type: string,
      required: true,
      maxLength: 1000,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

//schema
const mongoose = require("mongoose");


// Define the blog schema
const blogSchema = new mongoose.Schema({
  images: [
    {
      type: String,
    }
  ],
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

const express = require("express");
const Post = require('../models/SRJ-model')

// Endpoint to handle form submission

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const post = new Post({ title, content, author });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the post.' });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the posts.' });
  }
};

// Get a specific post
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ error: 'Post not found.' });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the post.' });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );
    if (!updatedPost) {
      res.status(404).json({ error: 'Post not found.' });
    } else {
      res.status(200).json(updatedPost);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the post.' });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      res.status(404).json({ error: 'Post not found.' });
    } else {
      res.status(200).json(deletedPost);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the post.' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};


// my-api/src/routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET paginated blogs
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const totalBlogs = await Blog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await Blog.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      blogs,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new blog
router.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
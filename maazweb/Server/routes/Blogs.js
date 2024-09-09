const express = require('express');
const router = express.Router();
const BlogController = require("../controllers/blogs/BlogController");

//PROTECTED ROUTES
router.post("/create-blog", BlogController.createBlog);
router.get("/get-blog/:id", BlogController.getBlog);

//PUBLIC ROUTES
router.get("/get-blog", BlogController.getBlogAll);


module.exports = router;
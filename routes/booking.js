const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog_controller');

//console.log('Blog router is loaded');


router.post('/create-blog',blogController.createBlog);

router.get('/show-blogs',blogController.showBlogs);

router.get('/show-blog/:id',blogController.showSingleBlog);

router.put('/update-blog/:id', blogController.updateBlogById);

router.delete('/delete-blog/:id',blogController.deleteBlog);

module.exports = router;
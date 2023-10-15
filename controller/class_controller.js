const Blog =require('../model/blogs');

//console.log('blog controller is loaded');



module.exports.createBlog = function(req,res){
    const blogs = {
      id:req.body.id,
      title:req.body.title,
      description:req.body.description,
      date:req.body.date,
      image:req.body.image,
      metadata:req.body.metadata,
      url:req.body.url
    }
    
    const blogsObj = Blog.build(blogs);
    blogsObj.save().then(() =>{
        res.status(201).json({ message: 'Blog added successfully' });
    })
    .then((error) =>{
        console.log(error);
    })

}


module.exports.showBlogs = function(req,res){
    Blog.findAll().then((blogs) =>{
        console.log(blogs);
        
        res.json(blogs);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'An error occured while getting blogs'});
        })
}

module.exports.showSingleBlog= function(req,res){
    const blogId = req.params.id;
    //console.log(blogId);
  // Find the blog by its ID
  Blog.findByPk(blogId)
    .then((blogs) => {
      if (!blogs) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Return the blog data in JSON format
      res.json(blogs);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching blog.' });
    });       
}

module.exports.updateBlogById = (req, res) => {
    const blogId = req.params.id;
    const updatedData = req.body; // Assuming you send the updated data in the request body
  
    // Find the blog by its ID
    Blog.findByPk(blogId)
      .then((blogs) => {
        if (!blogs) {
          return res.status(404).json({ error: 'Blog not found' });
        }
  
        // Update the blog's data
        return blogs.update(updatedData);
      })
      .then((updatedBlog) => {
        // Return the updated blog in JSON format
        res.json(updatedBlog);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the blog.' });
      });
  };


module.exports.deleteBlog = function(req,res){
    const blogId = req.params.id;
  // Find the blog by its ID and delete it
  Blog.findByPk(blogId)
    .then((blogs) => {
      if (!blogs) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Delete the blog
      return blogs.destroy();
    })
    .then(() => {
      res.json({ message: 'Blog deleted successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the blog.' });
    });

}

      // id
      // title
      // description
      // date
      // image
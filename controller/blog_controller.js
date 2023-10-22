const Blog =require('../model/blogs');

//console.log('blog controller is loaded');



module.exports.createBlog = async function(req,res){
  const { id,title,description,date,image,meta_tag,url } = req.body;

  if (!title || !description || !date || !image || !url || !meta_tag) {
    const missingFields = [];

    if (!title) missingFields.push('Title');
    if (!description) missingFields.push('Description');
    if (!date) missingFields.push('Date');
    if (!image) missingFields.push('Image');
    if (!meta_tag) missingFields.push('Meta Tag');
    if (!url) missingFields.push('URL');

    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const blog = new Blog({ id,title,description,date,image,meta_tag,url });
  try {
    await blog.save();
    return res.json({ message: 'Blog created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while saving the Blog.' });
  }

}


// module.exports.showBlogs = function(req,res){
//     Blog.findAll().then((blogs) =>{
//         console.log(blogs);
        
//         res.json(blogs);
//         })
//         .catch((error) => {
//             console.log(error);
//             res.status(500).json({error: 'An error occured while getting blogs'});
//         })
// }
module.exports.showBlogs = async function (req, res) {
  try {
    const blogs = await Blog.findAll();
    console.log(blogs);
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while getting blogs' });
  }
};

// module.exports.showSingleBlog= function(req,res){
//     const blogId = req.params.id;
//     //console.log(blogId);
//   // Find the blog by its ID
//   Blog.findByPk(blogId)
//     .then((blogs) => {
//       if (!blogs) {
//         return res.status(404).json({ error: 'Blog not found' });
//       }

//       // Return the blog data in JSON format
//       res.json(blogs);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching blog.' });
//     });       
// }

// module.exports.showSingleBlog = async function (req, res) {
//   const blogId = req.params.id;

//   try {
//     const blog = await Blog.findByPk(blogId);

//     if (!blog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }

//     res.json(blog);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching blog.' });
//   }
// };


// module.exports.updateBlogById = (req, res) => {
//     const blogId = req.params.id;
//     const updatedData = req.body; // Assuming you send the updated data in the request body
  
//     // Find the blog by its ID
//     Blog.findByPk(blogId)
//       .then((blogs) => {
//         if (!blogs) {
//           return res.status(404).json({ error: 'Blog not found' });
//         }
  
//         // Update the blog's data
//         return blogs.update(updatedData);
//       })
//       .then((updatedBlog) => {
//         // Return the updated blog in JSON format
//         res.json(updatedBlog);
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while updating the blog.' });
//       });
//   };

module.exports.showSingleBlog = async function (req, res) {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findByPk(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching blog.' });
  }
};

module.exports.updateBlogById = async (req, res) => {
  const blogId = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const blogs = await Blog.findByPk(blogId);
    if (!blogs) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const updatedBlog = await blogs.update(updatedData);
    res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the blog.' });
  }
}

// module.exports.deleteBlog = function(req,res){
//     const blogId = req.params.id;
//   // Find the blog by its ID and delete it
//   Blog.findByPk(blogId)
//     .then((blogs) => {
//       if (!blogs) {
//         return res.status(404).json({ error: 'Blog not found' });
//       }

//       // Delete the blog
//       return blogs.destroy();
//     })
//     .then(() => {
//       res.json({ message: 'Blog deleted successfully' });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while deleting the blog.' });
//     });

// }

module.exports.deleteBlog = async function (req, res) {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findByPk(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    await blog.destroy();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the blog.' });
  }
};

      // id
      // title
      // description
      // date
      // image
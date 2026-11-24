const {Router}=require('express');
const fs = require('fs');
const multer=require('multer');
const router=Router();
const Blog=require('../models/blog');
const path=require('path');


const Comment=require('../models/comment');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`))
  },
  filename: function (req, file, cb) {
    
    const fileName=`${Date.now()}-${file.originalname}`
    cb(null, fileName)
  }
})

const upload = multer({ storage: storage })


router.get("/add-new",(req,res)=>{
    return res.render('addBlog',{
        user:req.user
    })
})


router.get("/:id",async(req,res)=>{
    const blog=await Blog.findById(req.params.id).populate('createdBy')
    const comments=await Comment.find({blogId:req.params.id}).populate('createdBy')
    return res.render('blog',{
        blog,
        user:req.user,
        comments
    })
})

// ✅ Sahi: ':blogId' likhein
router.post('/comment/:blogId', async (req, res) => {
    await Comment.create({
        content: req.body.content,
        createdBy: req.user._id,
        blogId: req.params.blogId
    });
  
    return res.redirect(`/blog/${req.params.blogId}`);
});

// ✅ Delete Blog Route
router.post('/delete/:id', async (req, res) => {
    try {
        // 1. Check karein ki user logged in hai ya nahi
        if (!req.user) {
            return res.redirect('/user/signin');
        }

        // 2. Blog find karein
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        // 3. Security Check: Kya ye blog isi user ne banaya hai?
        if (blog.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'ADMIN') {
            return res.status(403).send('Unauthorized: Aap sirf apna blog hi delete kar sakte hain');
        }

        // 4. Blog se jude saare comments delete karein
        await Comment.deleteMany({ blogId: blog._id });

        // 5. Uploaded cover image ko storage se delete karein (Optional but recommended)
        if (blog.coverImageURL && blog.coverImageURL.startsWith('/uploads/')) {
            const imagePath = path.resolve(`./public${blog.coverImageURL}`);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // 6. Database se blog delete karein
        await Blog.findByIdAndDelete(req.params.id);

        // Delete ke baad home page par redirect
        return res.redirect('/');
    } catch (error) {
        console.error('Error deleting blog:', error);
        return res.status(500).send('Kuch galat ho gaya, blog delete nahi ho saka');
    }
});

router.post("/",upload.single('coverImage'),async(req,res)=>{
    const {title,body}=req.body
   const blog=await Blog.create({
        body,
        title,
        coverImageURL:`/uploads/${req.file.filename}`,
        createdBy:req.user._id
    })
    return res.redirect(`/blog/${blog._id}`)
    })
module.exports=router
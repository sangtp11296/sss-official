const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//Create New Post
router.post("/", async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
    
})

//Update Post
router.put('/:id', async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true});
                res.status(200).json(updatedPost);
            }catch(err){
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can update only your post!');
        }   
    } catch (err){
        res.status(500).json(err);
    }
});

//Delete Post
router.delete('/:id', async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json('Post has been deleted...');
            }catch(err){
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can delete only your post!');
        }   
    } catch (err){
        res.status(500).json(err);
    }
});

//Get Post
router.get('/:slug', async(req,res) => {
    try{
        const slug = req.params.slug;
        const post = await Post.find({slug});
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get all posts
router.get('/', async(req,res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    const authorname = req.query.author;
    const section = req.query.section;
    const photographer = req.query.photographer;
    try{
        let posts;
        if(username){
            posts = await Post.find({username}).sort({createdAt: -1}).exec();;
        } else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }}).sort({createdAt: -1}).exec();
        } else if(authorname){
            posts = await Post.find({authorname}).sort({createdAt: -1}).exec();
        } else if(photographer){
            posts = await Post.find({photographer}).sort({createdAt: -1}).exec();
        } else if(section){
            posts = await Post.find({section}).sort({createdAt: -1}).exec();
        } else{
            posts = await Post.find({}).sort({createdAt: -1}).limit(6).exec();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/sections/:section', async(req,res) => {
    
    try{
        const section = req.params.section;
        const posts = await Post.find({section}).sort({createdAt: -1}).exec();;
        res.status(200).json(posts);
        
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
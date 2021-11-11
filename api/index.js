const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const bodyParser = require('body-parser');
const googleModule = require('./GoogleDrive')
const { google } = require('googleapis');
const toStream = require('buffer-to-stream')
const User = require('./models/User');
const Post = require('./models/Post');


dotenv.config();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json());
console.log(googleModule())

const drive = google.drive({
    version: 'v3',
    auth: googleModule
})
mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDB'))
.catch((err) => console.log(err));


// const uploadPost = multer({storage:gallery});
const uploadPost = multer();
app.post('/api/uploads', uploadPost.single('upload'), async (req,res) => {
    try{
        const postPhoto = await drive.files.create({
            requestBody:{
                name: Date.now() + '_' + req.file.originalname,
                parents: ['1IPqKaIIsBA99UWnLVkyNp71xl02ZuG0y'],
                mimeType: 'image/jpg'
            },
            media:{
                mimeType: 'image/jpg',
                body: toStream(Buffer.from(req.file.buffer))
            }
        })
        res.status(200).json({
            uploaded: true,
            url: `https://drive.google.com/uc?id=${postPhoto.data.id}`
        });
    }catch (err){
        console.log(err)
    }
})

const uploadImage = multer();
app.post('/api/upload', uploadImage.single('file'), async (req,res) => {
    if(req.body.type === 'postCover'){
        try{
            const coverPost = await drive.files.create({
                requestBody:{
                    name: req.body.name,
                    parents: ['1JuzRfnC6FDhjezmcKCQeyMow1DD7oDzc'],
                    mimeType: 'image/jpg'
                },
                media:{
                    mimeType: 'image/jpg',
                    body: toStream(Buffer.from(req.file.buffer))
                }
            })
            res.status(200).json("Post cover has been uploaded!");
            const updatedPost = await Post.findByIdAndUpdate(req.body.userID,{coverPhoto:coverPost.data.id},{new:true})
        }catch (err){
            console.log(err)
        }
    }
    if(req.body.type === 'avatar'){
        try{
            const avatar = await drive.files.create({
                requestBody:{
                    name: req.body.name,
                    parents: ['1dec_Y6zdEWryCfBWhIpxYN7qJxrelolg'],
                    mimeType: 'image/jpg'
                },
                media:{
                    mimeType: 'image/jpg',
                    body: toStream(Buffer.from(req.file.buffer))
                }
            })
            res.status(200).json("Profile avatar and cover has been uploaded!");
            const updatedUser = await User.findByIdAndUpdate(req.body.userID,{profileAvatar:avatar.data.id},{new:true})
        }catch (err){
            console.log(err)
        }
    }
    if(req.body.type === 'cover'){
        try{
            const cover = await drive.files.create({
                requestBody:{
                    name: req.body.name,
                    parents: ['10OOW-nfGwTqsblbr38WV_SMlUeZJ6EqJ'],
                    mimeType: 'image/jpg'
                },
                media:{
                    mimeType: 'image/jpg',
                    body: toStream(Buffer.from(req.file.buffer))
                }
            })
            res.status(200).json("Profile avatar and cover has been uploaded!");
            const updatedUser = await User.findByIdAndUpdate(req.body.userID,{profileCover:cover.data.id},{new:true})
        }catch (err){
            console.log(err)
        }
    }
})


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.listen('5000', () => {
    console.log('Backend is running.')
});
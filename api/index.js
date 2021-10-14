const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

dotenv.config();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use('/images/covers', express.static(path.join(__dirname,'/images/covers')))
app.use('/images/gallery', express.static(path.join(__dirname,'/images/gallery')))
app.use('/images/profile', express.static(path.join(__dirname,'/images/profile')))

const CLIENT_ID = '968044425042-vp8o30f09jqojgl93gt6f1qoup8eltf9.apps.googleusercontent.com';
const CLIENT_SECRET = 'ZvhjtwPvtqnb_4o3bTxwaTda';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04Go3ZgWi4qeiCgYIARAAGAQSNwF-L9IrAO7DB3REaJK3Sb76f-0Z0mm6KeO0uX1f8NVAU9_bkWLjmafQm29tRu3JlnnLGX8IyRM';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
    )
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'images/covers');
    },
    filename:(req,file,cb) => {
        cb(null,req.body.name);
    }
})
const gallery = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'images/gallery');
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname);
    }
})
const profile = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'images/profile');
    },
    filename:(req,file,cb) => {
        cb(null,req.body.name);
    }
})

const uploadCover = multer({storage:storage});
app.post('/api/upload', uploadCover.single('file'), (req,res) => {
    res.status(200).json("Cover has been uploaded!");
})
const uploadPost = multer({storage:gallery});
app.post('/api/uploads', uploadPost.single('upload'), (req,res) => {
    res.status(200).json({
        uploaded: true,
        url: `http://localhost:5000/images/gallery/${req.file.originalname}`
    });
})
const uploadProfile = multer({storage:profile});
app.post('/api/upload/profile', uploadProfile.single('file'), (req,res) => {
    console.log(req.body)
    res.status(200).json("Profile avatar and cover has been uploaded!");
})


// app.post('/api/upload/profile', (req,res) => {
//     // const uploadProfile = drive.files.create({
//     //     requestBody:{
//     //         name: req.body.name,
//     //         mimeType: 'image/jpg'
//     //     },
//     //     media:{
//     //         mimeType: 'image/jpg',
//     //         body: fs.createWriteStream(req)
//     //     }
//     // })
//     console.log(req)
//     res.status(200).json("Profile avatar and cover has been uploaded!");
// })
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.listen('5000', () => {
    console.log('Backend is running.')
});
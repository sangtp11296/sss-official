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
const bodyParser = require('body-parser');

dotenv.config();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use('/images/covers', express.static(path.join(__dirname,'/images/covers')))
app.use('/images/gallery', express.static(path.join(__dirname,'/images/gallery')))

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

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'), (req,res) => {
    res.status(200).json("Cover has been uploaded!");
})
const uploadPost = multer({storage:gallery});
app.post('/api/uploads', uploadPost.single('upload'), (req,res) => {
    res.status(200).json({
        uploaded: true,
        url: `http://localhost:5000/images/gallery/${req.file.originalname}`
    });
})
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.listen('5000', () => {
    console.log('Backend is running.')
});
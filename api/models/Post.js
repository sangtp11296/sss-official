const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        require:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    coverPhoto:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    authorname:{
        type:String,
        required:true
    },
    photographer:{
        type:String,
        required:false
    },
    section:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:true
    },
    tag:{
        type:String,
        required:false
    }
},{timestamps: true});

module.exports = mongoose.model('Post', PostSchema);
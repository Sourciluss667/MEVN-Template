const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PostSchema = new Schema({
    title: String,
    description: String
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post
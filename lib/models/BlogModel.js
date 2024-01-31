import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
},{
    timeStamp:true
});

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", Schema)

export default BlogModel;
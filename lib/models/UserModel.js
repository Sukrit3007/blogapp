import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    savedRecipes: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "blogs" }],
},{
    timeStamp:true
});

const UserModel = mongoose.models.User || mongoose.model("User", Schema)

export default UserModel;

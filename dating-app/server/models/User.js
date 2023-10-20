const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    username :{type:String,unique :true},
    password :String,
    name:String,
    about:String,
    age:String,
    gender:String,
    requested: [{
        type: String
}],
    accepted : [{
        type:String
    }],
},{timestamps:true});

const UserModel= mongoose.model("User",UserSchema);
module.exports=UserModel;
import mongoose from "mongoose"

const AdminSchem = new mongoose.Schema({
    clubName : {type : String},
    clubProfileImg : {type : String},
    userId : {type: String , required : true , unique : true},
    password :{type : String , require:true},
});

const ClubAdmin = mongoose.model("ClubAdmins" , AdminSchem );

export default ClubAdmin;
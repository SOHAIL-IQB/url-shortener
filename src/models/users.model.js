const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    fulName : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique :true
    },

    organizationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'organization'
    }


})

const USERSModel = mongoose.model("users",UserSchema)
module.exports = USERSModel
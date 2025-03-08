const  Mongoose  = require("mongoose");

const userSchema = Mongoose.Schema({
    userName :{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    }
})

module.exports = Mongoose.model('users', userSchema);

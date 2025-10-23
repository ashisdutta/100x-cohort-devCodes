const mongoose = require('mongoose')
const { Schema } = require('zod/v3')

mongoose.connect("mongodb+srv://ashisdutta795_db_user:ydyabEqz84NrYh6O@paytm-cluster.g26pscv.mongodb.net/")

const userSchema = new mongoose.Schema({
    userName:String,
    firstName:String,
    lastName:String,
    password:String
})

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, // reference to user model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})


const User = mongoose.model("User", userSchema)
const Account = mongoose.model("Account", accountSchema)


module.exports = {
    User,
    Account
}


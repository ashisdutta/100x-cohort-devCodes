const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:sdvdskvwdsdvsdkvjhe@cluster0.ivahaj6.mongodb.net/user_app")

const User = mongoose.model('users', {name: String, email: String, password: String})


app.post('/signup', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username})
    // CRUD => create, update, read, delete

    if(existingUser){
        return res.status(400).send('username already exists');
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save();

    res.json({
        "msg":"user created successfully"
    })

})

app.listen(4000);

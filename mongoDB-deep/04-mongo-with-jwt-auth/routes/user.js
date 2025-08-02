const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config")
const {User, Course} = require("../db")
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg:"User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({
            token
        })
    }
    res.status(411).json({
        msg:"incorrect username & password"
    })
    
});


router.get('/courses', async (req, res) => {
    const response = await Course.find({
    })
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username: username
    }, {
        "$push":{
            purchesedCourses: courseId
        }
    })
    res.json({
        message: "Purchase Complete!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.username
    })
    //console.log(user.purchesedCourses);

    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router
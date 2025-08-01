const { Router, json } = require("express");
const router = Router();
const {User, Course} = require("../db")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    const response = await Course.find({})

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

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
        username: req.headers.username
    })
    console.log(user.purchesedCourses);

    const courses = await Course.find({
        _id:{
            "$in":user.purchesedCourses
        }
    })

    res.json({
        courses: courses
    })



});

module.exports = router
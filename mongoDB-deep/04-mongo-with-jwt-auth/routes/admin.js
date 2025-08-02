const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course} = require("../db");
const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken");


// Admin Routes
router.post('/signup', (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username,
        password
    })
    res.json({
        msg:"Admin created successfully"
    })

});

router.post('/signin', (req, res) => {
    const { username, password } = req.body;

    const user = User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({token})
    }else{
        res.status(411).json({
            msg : " Incorrect email & password"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({
    })
    res.json({
        courses: response
    })

});

module.exports = router;
const express = require("express")
const router = express.Router();
const zod = require("zod")
const jwt = require("jsonwebtoken")
const { JWT_SECRET} = require("../config")
const { User, Account } = require("../db");
const {authMiddleware} = require("../middleware")


const signupSchema = zod.object({
    userName: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.get("/signup", async (req, res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.json({
            message: "Email already taken/ incorrect inputs"
        })
    }

    const user =await User.findOne({
        username:body.username
    })
    if(user){
        return res.json({
            message: "Email already taken/ incorrect inputs"
        })
    }

    const dbUser = await User.create(body);

    const userId = dbUser._id;
    await Account.create({
        userId,
        balance: 1+Math.random()*1000
    })

    const token = jwt.sign({userId:dbUser._id.toString()}, JWT_SECRET)

    res.json({
        message: "user created successfully",
        token: token
    })

})

const signinSchema = zod.object({
    userName: zod.string().email(),
    password:zod.string()
})

router.post("/signin", async (req, res)=>{
    const {body} = req;

    const {success} = signinSchema.safeParse(body)
    if(!success){
        return res.status(411).json({
            message: "Email already taken/ Incorrect inputs"
        })
    }
    const existingUser =await User.findOne({
        userName:body.userName,
        password:body.password
    })
    console.log(existingUser)
    if(existingUser){
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET)

        return res.json({
        token: token
    })
    }
    
})


const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})



router.put('/', authMiddleware, async (req, res)=>{
    const {body} = req;
    const response = updateSchema.safeParse(body);
    if(!response.success){
        return res.status(411).json({
            msg: "Error while updating information"
        })
    }
    const result = await User.updateOne({_id:req.userId}, body)

    return res.json({
        msg: "Updated Successfully"
    })
})



router.get('/bulk', async (req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})





module.exports = router;


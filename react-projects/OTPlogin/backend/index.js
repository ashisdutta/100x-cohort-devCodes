const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const { PhoneNo, OTPLogin } = require("./type");
const { success } = require("zod");
const app = express();
app.use(express.json()); 
require('dotenv').config();

app.use(cors({
    origin: "http://localhost:5173"
}));

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.post("/signin/phone", async function(req, res){
    const Number = req.body;
    const parsedNumber = PhoneNo.safeParse(Number);
    console.log(parsedNumber.data)
    if(!parsedNumber.success){
        return res.status(411).json({
            msg: "you send wrong Input"
        })   
    }

    const {phoneNo} = parsedNumber.data;

    try {
        const verification = await client.verify.v2
        .services(TWILIO_VERIFY_SERVICE_SID)
        .verifications.create({
            channel: "sms",
            to: phoneNo.startsWith("+") ? phoneNo : `+91${phoneNo}`
        });

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            status: verification.status,
        });
    } catch (error) {
        console.error("Twilio Error:", error);

        return res.status(500).json({
            success:false,
            message: "OTP sent failed",
            error: verification.error
        })
        }
    }
)

app.post("/signin/otp", async function(req, res){
    const Body = req.body;
    const parsedOTP = OTPLogin.safeParse(Body);
    
    if(!parsedOTP.success){
        return res.json({
            success:false,
            message:"invalid otp format",
            error:parsedOTP.error
        })
    };

    const { OTP, phoneNo} = parsedOTP.data;
    const verificationCheck = await client.verify.v2
    .services(TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks.create({
        code: OTP,
        to: phoneNo.startsWith("+") ? phoneNo : `+91${phoneNo}`})
    if (verificationCheck.status === "approved") {
        return res.status(200).json({
            success: true,
            message: "OTP verified successfully",
        });
    } else {
    return res.status(401).json({
        success: false,
        message: "Invalid or expired OTP",
    });
    }}
)

app.listen(3000)
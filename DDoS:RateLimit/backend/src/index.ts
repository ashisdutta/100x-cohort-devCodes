import express from "express";
import rateLimit from "express-rate-limit";
const app = express();
const PORT = 3000;

app.use(express.json());

// Rate limiter configuration
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 5 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});
const otpStore: Record<string, string> = {};

app.post("/generate-otp", otpLimiter, (req, res)=>{
    const email = req.body.email;
    if(!email){
        return res.status(400).json({message: "Email is required"});
    }
    const otp = Math.floor(100000 + Math.random()*900000).toString();
    otpStore[email] = otp;

    console.log(`OTP for ${email}: ${otp}`); // log the OTP to to console
    res.status(200).json({message: "otp generated and logged"});
});


app.post("/reset-password", passwordResetLimiter, async (req, res)=>{
    const {email, otp, newPassword, token} = req.body;
    if(!email || !otp || !newPassword || !token){
        return res.status(400).json({message: "Email, otp and newPassword are required"});
    }
    console.log(token);

    let formData = new FormData();
        formData.append('secret', "0x4AAAAAACaIcJV_QAwJjMvNYMfPw_yPLT0");
        formData.append('response', token);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const result = await fetch(url, {
            body: formData,
            method: 'POST',
        });
    const challengeSucceeded = (await result.json()).success;

    if (!challengeSucceeded) {
        return res.status(403).json({ message: "Invalid reCAPTCHA token" });
    }
    if(otpStore[email]===otp){
        console.log(`password for ${email} has been reset to: ${newPassword}`);
        delete otpStore[email];
        res.status(200).json({message: "Password has been resent successfully"});
    }else {
        res.status(401).json({message: "Invalid OTP"})
    }
});

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})



import * as z from "zod";

export const PhoneNo = z.object({
    phoneNo : z.string().min(10).max(15),
})

export const OTPLogin = z.object({
    phoneNo:z.string().max(10),
    OTP : z.string().min(4).max(10)
})


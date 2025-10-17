import { useState } from "react";
import { Number } from "twilio/lib/twiml/VoiceResponse";
import { PhoneNo } from "../../backend/type";

export default function LoginBox(){
    const [number, setNumber ] = useState("")
    const [option, setOption] = useState("Enter Number")
    const [OTP, setOTP] = useState("")

    const OTPGenerate = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/signin/phone",{
                method: "POST",
                body: JSON.stringify({
                    phoneNo:number.trim()
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await response.json();
            if(data.success){
                setOption("Enter OTP")
            }

        } catch (error) {
            console.error("unable go generate");
        }
    }

    const VerifyOTP = async () => {
        try {
            const response = await fetch("http://localhost:3000/signin/otp",{
                method: "POST",
                body: JSON.stringify({
                    phoneNo:number.trim(),
                    OTP:OTP.trim()

                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await response.json();
            window.alert("Succesfully logedin ")
        } catch (error) {
            window.alert("Unable to verify", error);
        }
    }

    return <div>
        {option === "Enter Number" && (<div>
            <input 
                className=""
                type="tel"
                placeholder="Enter your Phone Number"
                onChange={(e)=>{setNumber(e.target.value)}}
            />
            <button onClick={OTPGenerate}>Send Number</button>
        </div>)}

        {option === "Enter OTP" && (
            <div>
                <input type="text"
                placeholder="Enter OTP"
                onChange={(e)=>{setOTP(e.target.value)}}
                />
                <button onClick={VerifyOTP}>Verify OTP</button>
            </div>
        )}
    </div>


























//     return <div>
//         <input 
//         className=""
//         type="tel"
//         placeholder="Enter your Phone Number"
//         onChange={(e)=>{setNumber(e.target.value)}}
//         />

//         <button onClick={()=>{
//             fetch("http://localhost:3000/signin/phone", {
//                 method: "POST",
//                 body: JSON.stringify({
//                     phoneNo:number.trim()
//                 }),
//                 headers:{
//                     "Content-Type":"application/json"
//                 }
//             })
//         }}>Send OTP</button>
//     </div>
}


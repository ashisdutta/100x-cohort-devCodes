import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type  { SignupInput}  from "@ashisdta/common";
import {BACKEND_URL} from "../config"
import axios from "axios";


export const Auth = ({type}: {type:"signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password:""
    })


    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`, postInputs);
            const { token } = response.data;
            localStorage.setItem("token", token);
            navigate("/blogs");
        } catch (error) {
            alert("request failed")
        }
    }


    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="font-extrabold text-3xl">
                        Create an account
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ? "Don't have an account?":"Already have an account?"}
                        <Link className="pl-2 underline" to={type === "signin"? "/signup":"/signin"}>{type === "signin"? "Sign up":"Sign in"}</Link>
                    </div>
                </div>


                <div className="pt-8">
                        {type === "signup"? <LabelledInput label="Username" placeholder="Enter your username" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                name:e.target.value
                            })
                        }}/> : null}
                        <LabelledInput label="Email" placeholder="ash@gmail.com" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                email:e.target.value
                            })
                        }}/>
                        <LabelledInput label="Password" placeholder="ss452@$%vew" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                password:e.target.value
                            })
                        }}/>

                        <button onClick={sendRequest} type="button" className="text-white bg-gray-900 box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mt-6 w-full rounded-lg">{type=== "signup"?"signup":"signin"}</button>
                </div>
            </div>
        </div>
    </div>
}



interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({label, placeholder, onChange}: LabelledInputType) {
    return <div>
        <div>
            <label className="block mb-2.5 text-sm font-semibold text-heading pt-4">{label}</label>
            <input onChange={onChange} type="text" className="bg-gray-50 border border-default-medium border-gray-300 text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder={placeholder} required />
        </div>
    </div>
}
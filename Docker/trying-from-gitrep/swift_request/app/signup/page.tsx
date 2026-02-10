"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Signup(){
  const router = useRouter();

    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);


     const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setError("");
        setIsSubmitting(true);
        try {
             const res = await fetch("/api/signup", 
            {
                method:"POST",
                headers: {
                   "Content-Type": "application/json",
                 },
                body: JSON.stringify(
                    {
                        name,
                        email,
                        password,
                    })
            });

            if(!res.ok) throw new Error("SignUp failed");
            const data = await res.json();
            console.log("success: ", data);

            router.push("/login");
        } catch (err:any) {
            console.error(err); 
             setError(err.message || "Something went wrong");

             setTimeout(() => {
                setName("")
                setError("")
                setEmail("")
                setPassword("")
                setIsSubmitting(false) 
            }, 5000)

        }finally {
            setIsSubmitting(false);
        }  
    }
return(
 <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-gray-900 py-20 px-10 border border-amber-100 rounded-3xl items-center flex flex-col">
            <h1 className="text-2xl font-bold mb-4"> SignUp </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-80">

                <input 
                    type="name"
                    placeholder="john"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="border p-2 rounded"
                    required
                
                />

                <input 
                    type="email"
                    placeholder="abc@example.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border p-2 rounded"
                    required
                
                />
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                 />
                 <p>Already have account? <Link href={"/login"}>SignIn</Link></p>
                <button type="submit" disabled={isSubmitting} className="bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white p-2 border rounded flex items-center justify-center hover:cursor-pointer">
                {isSubmitting ? (
                    <>
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        ></circle>
                        <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                        5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 
                        5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Submitting...
                    </>
                ) : (
                    "SignUp"
                )}
                </button>
            </form>
            {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
    </div>
    )
}
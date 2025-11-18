import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"





export const AppBar = ()=>{
    const name = localStorage.getItem("name") || "User";
    return <div className="border-b border-slate-200 flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center cursor-pointer text-xl">
            Medium
        </div>
        </Link>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="bg-green-700 text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-5 py-2.5 focus:outline-none me-2 cursor-pointer">New</button>
            </Link>
            <Avatar name={name} size="big"/>
        </div>
    </div>
}


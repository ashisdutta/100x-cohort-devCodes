import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"

export const AppBar = ()=>{
    const name = localStorage.getItem("name") || "User";
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("/signin");
    };

    return <div className="border-b border-slate-200 flex justify-between px-4 sm:px-6 md:px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center cursor-pointer text-lg sm:text-xl">
                Medium
            </div>
        </Link>
        {token ? (
            <div className="flex items-center gap-2 sm:gap-4">
                <Link to={'/publish'}>
                    <button type="button" className="bg-green-700 text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 focus:outline-none cursor-pointer">
                        <span className="hidden sm:inline">New</span>
                        <span className="sm:hidden">+</span>
                    </button>
                </Link>
                <button 
                    onClick={handleLogout}
                    type="button" 
                    className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                >
                    Logout
                </button>
                <Avatar name={name} size="big"/>
            </div>
        ) : (
            <div className="flex items-center gap-2 sm:gap-4">
                <Link to={'/signin'}>
                    <button type="button" className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors">
                        Sign In
                    </button>
                </Link>
            </div>
        )}
    </div>
}


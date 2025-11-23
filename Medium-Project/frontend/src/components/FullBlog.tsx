import { AppBar } from "./AppBar";
import type { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({blog}: {blog:Blog})=>{
    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 px-4 sm:px-6 md:px-10 w-full max-w-screen-xl pt-8 md:pt-12 gap-6 md:gap-8">
                <div className="col-span-1 md:col-span-8">
                    <div className="text-2xl sm:text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4 pb-2 text-sm sm:text-base">
                        post on 17th November 2023
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-1 md:col-span-4">
                    <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                        <div className="text-slate-600 text-lg sm:text-xl font-extralight">
                            Author
                        </div>
                        <div className="flex pt-4">
                            <div className="flex flex-col justify-center px-2">
                                <Avatar name={blog.author.name} size="big"/>
                            </div>
                            <div className="flex flex-col justify-center text-lg sm:text-xl md:text-2xl font-medium">
                                {blog.author.name}
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
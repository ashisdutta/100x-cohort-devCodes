import { AppBar } from "./AppBar";
import type { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({blog}: {blog:Blog})=>{
    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4 pb-2">
                        post on 17th November 2023
                    </div>
                    <div className="">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 flex justify-center">
                    <div>
                        <div className="text-span-600 text-xl font-extralight">
                        Author
                    </div>
                    <div className="flex pt-1">
                        <div className="flex flex-col justify-center px-2 text-2xl">
                            <Avatar name={blog.author.name} size="big"/>
                        </div>

                        <div className="flex flex-col justify-center text-2xl font-medium">
                            {blog.author.name}
                        </div>        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
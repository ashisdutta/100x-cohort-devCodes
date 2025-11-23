import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { Spinner } from "../components/Spinner"

export const Blogs = () =>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <AppBar/>
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner/>
                </div>
            </div>
        </div>
    }

    return <div>
        <AppBar/>
        <div className="flex justify-center px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl w-full">
                {blogs.map(blog => <BlogCard 
                    authorName={blog.author.name || "Anonoymous"}
                    title={blog.title}
                    content={blog.content}
                    key={blog.id}
                    id={blog.id}
                    publishedDate={"18th Nov 2025"}
                />)
                }
            </div>
        </div>
    </div>
}
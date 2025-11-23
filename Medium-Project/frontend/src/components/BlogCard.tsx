import { Link } from "react-router-dom";


interface BlogCardsProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
    id:string
}

export const BlogCard = ({authorName,title,content,publishedDate,id}: BlogCardsProps) =>{
    return <Link to={`/blog/${id}`}>
        <div blog-id={id} className="border-b border-slate-200 pb-4 p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex flex-wrap items-center gap-2">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} size={"small"}/>
                </div>
                <div className="font-extralight text-sm sm:text-base flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col">
                    <Circle/>
                </div>
                <div className="font-thin text-slate-400 text-xs sm:text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>    
            
            <div className="text-lg sm:text-xl md:text-2xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-sm sm:text-base font-thin pt-1">
                {content.length>100 ? content.slice(0,100) + "..." : content}
            </div>
            <div className="text-slate-500 text-xs sm:text-sm font-thin pt-4">
                {`${Math.ceil(content.length/100)} minutes(s) read`}
            </div>
        </div>
    </Link>
}


export function Avatar({name, size = 'small'}:{name:string, size:"small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size==="small"? "w-6 h-6":"w-10 h-10"} overflow-hidden text-amber-50 rounded-full bg-gray-600`}>
            <span className={`font-medium text-body ${size==="small"? "text-xs":"text-md"}`}>{name[0]}</span>
        </div>
}


export function Circle(){
    return <div className=" h-2 w-2 rounded-full bg-slate-500">
    </div>
}
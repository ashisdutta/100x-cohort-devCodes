import axios from "axios";
import { BACKEND_URL } from "../config";
import { AppBar } from "../components/AppBar";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <AppBar/>
        <div className="flex justify-center w-full pt-4 sm:pt-8 px-4 sm:px-6">
            <div className="max-w-screen-lg w-full">
                <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:p-3" 
                    placeholder="Title" 
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                />

                <TextEditor onChange={(e) => setDescription(e.target.value)} />

                <button 
                    onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content:description
                        }, {
                            headers:{
                                Authorization: localStorage.getItem("token")
                            }
                        })
                        navigate(`/blog/${response.data.id}`)
                    }} 
                    type="submit" 
                    className="mt-4 inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 cursor-pointer"
                >
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function TextEditor({onChange}:{onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
        <div className="w-full mb-4">
            <div className="flex items-center justify-between border rounded-lg">
                <div className="my-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea
                        id="editor"
                        rows={8}
                        className="focus:outline-none block w-full px-2 sm:px-4 py-2 text-sm sm:text-base text-gray-800 bg-white border-0"
                        placeholder="Write an article..."
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
        </div>
    </div>
}


"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTicketModal(){
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        title:"",
        category: "IT",
        priority: "LOW",
        description: ""
    });
    
    const handleChange = (e:any)=> {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e:any)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/tickets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Failed to create ticket");
            }

            setFormData({
                title:"",
                category:"IT",
                priority:"LOW",
                description:""
            })
            setIsOpen(false);
            router.refresh()
        } catch (err:any) {
            setError(err.message);
        }finally{
            setIsSubmitting(false);
        }
    }


    return (
        <div>
           <button onClick={()=>setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
             + New Request 
           </button>

           {/* only shows if isOpen is true  */}

           {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                {/* THE MODAL BOX */}
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                    {/* Header */}   
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                        <h2 className="text-lg font-semibold text-gray-800">Submit a Request</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600 font-bold text-xl"
                        >
                            &times;
                        </button>
                    </div>
                    {/* Form Body */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Error Message */}
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
                            {error}
                            </div>
                        )}
                        
                        {/*Title Input*/}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"> Title </label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="E.g., VPN Connection Failed"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        {/* Row: Category & Urgency */}
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                              </label>
                              <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border  text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                >
                                    <option value="IT">IT Support</option>
                                    <option value="HR">Human Resources</option>
                                    <option value="SALE">SALE</option>
                                </select>
                           </div>
                           {/*priority*/}
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                              </label>
                              <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border  text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                >
                                    <option value="LOW">LOW</option>
                                    <option value="MEDIUM">MEDIUM</option>
                                    <option value="HIGH">HIGH</option>
                                </select>
                           </div>
                        
                        </div>
                       {/* description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                               Description
                            </label>
                            <textarea
                                name="description"
                                required
                                rows={3}
                                placeholder="Describe the issue in detail..."
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all"
                            />
                        </div>
                        {/* footer action */}
                        <div className="flex justify-end space-x-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                            >
                            {isSubmitting ? (
                                <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
           )}
 
    </div>
    )
}
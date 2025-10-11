import { useState } from "react";
import { useEffect } from "react";

export default function useFetch(name){
    const [data, setData] = useState({});

    const fetchData = async ()=>{
        try {
            const res = await fetch(`https://api.github.com/users/${name}`);
            const userData = await res.json();
            setData(userData);
        } catch (error) {
            console.error("failed to fetch", error);
        }
    }

    useEffect(()=>{
        if(!name) return;
        fetchData();
    }, [name])

    return data;
}

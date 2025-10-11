import { useCallback, useState } from "react";

export default function Para(){
    const [words, setWords] = useState(0);
    const [paragraph, setParagraph] = useState("");

    const SentenceGenerator = useCallback(()=>{
        const ALL_WORDS = ["hi", "my", "name", "is", "for", "to", "random", "word", "she", "can", "desk", "dark", "Jacket"];
        let pragh = "";
        for (let i=0; i<words; i++){
            const randomIndex= Math.floor(Math.random()* ALL_WORDS.length);
            pragh += ALL_WORDS[randomIndex] + " ";
        }
        setParagraph(pragh);
            
        
    }
    , [words, paragraph])



    return <div>
        <h2>Para Generator</h2>
        <input 
        type="number"
        onChange={(e)=>{
            setWords(e.target.value);
        }}
        />
        <button onClick={SentenceGenerator}>Generate</button>
        <div>
            {paragraph}
        </div>
    </div>
}
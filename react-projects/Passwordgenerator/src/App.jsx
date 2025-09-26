import { use, useEffect, useState, useRef } from 'react'
import "./App.css"

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const selectpassword = useRef(null);

  useEffect(()=>{
    let pass=""
    let str="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    if(numbersAllowed) str += "0123456789";
    if(charactersAllowed) str += "!@#$%^&*()-_=+[]{}:,.<>?~";

    for (let i = 0; i < length; i++) {
      let char = Math.random()*str.length + 1 
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numbersAllowed, charactersAllowed])

  function copyPasswordToClipboard(){
    selectpassword.current.select();
    window.navigator.clipboard.writeText(password);
  }







  return (
      <div className='main-container'>
        <h1>Password Generator</h1>
        <div>
          <div className='input-copy-Bar'>
            <input 
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={selectpassword}
            />
            <button onClick={copyPasswordToClipboard}>Copy</button>
          </div>

          <div className='password-checkbar'>
              <div>
                <input 
                type="range"
                min={6}
                max={100}
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label >length: {length}</label>
              </div>

              <div>
                <input 
                type="checkbox"
                onChange={()=>{
                  setNumbersAllowed((prev)=>!prev)
                }}
                />
                <label>Numbers</label>
              </div>

              <div>
                <input 
                type="checkbox"
                onChange={()=>{
                  setCharactersAllowed((prev)=>!prev)
                }}
                />
                <label>Characters</label>
              </div>
          </div>
        </div>
      </div>
  )
}

export default App


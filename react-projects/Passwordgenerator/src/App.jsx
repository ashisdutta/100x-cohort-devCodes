import { use, useState } from 'react'
import "./App.css"

function App() {
  const [password, setpassword] = useState("")
  const [length, setLength] = useState();
  const [numbers, setNumbers] = useState();
  const [characters, setCharacters] = useState();


  return (
      <div className='main-container'>
        <div>
          <div className='input-copy-Bar'>
            <input type="text" />
            <button>Copy</button>
          </div>

          <div className='password-checkbar'>
              <div>
                <input type="range" />
                <label >length: {length}</label>
              </div>

              <div>
                <input type="checkbox" />
                <label>Numbers</label>
              </div>

              <div>
                <input type="checkbox" />
                <label>Characters</label>
              </div>
          </div>
        </div>
      </div>
  )
}

export default App

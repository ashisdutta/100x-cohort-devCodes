import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);




  return (
    <div className='mainDiv'>
      <h2>Currency Converter</h2>

      <InputBox props={label= "from", amount= "amount", onAmountChange= "convertedAmount"}/>
      <button id='swap'>Swap</button>
      <InputBox/>
      <button id='convert'>convert</button>
    </div>
  )
}

export default App

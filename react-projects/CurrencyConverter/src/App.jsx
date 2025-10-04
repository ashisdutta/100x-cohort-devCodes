import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  // getting all currency Options on the variable "options"
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }


  const convert = ()=> {
    setConvertedAmount(amount * currencyInfo[to]);
  }



  return (
    <div className='mainDiv'>
      <h2>Currency Converter</h2>

      <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount)=> { setAmount(amount)}}
      />
      <button id='swap' onClick={swap}>Swap</button>
      <InputBox
        label="to"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
      
      />
      <button id='convert' onClick={convert}>convert{from} to {to}</button>
    </div>
  )
}

export default App

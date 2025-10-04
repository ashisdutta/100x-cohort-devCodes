import "./InputBox.css";

function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency = "usd",
    onCurrencyChange,
    currencyOptions = []
}){
    return(
        <div className="main-component">
            <div className="amountSection">
                <label>{label}</label>
                <input 
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="currencySection">
                <label>Currency Type </label>
                <select
                value={selectCurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >

                    {currencyOptions.map((item)=>{
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
            </div> 
        </div>
    )
}


export default InputBox;

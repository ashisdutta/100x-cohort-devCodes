# notes for currency converter app

## api link

```javascript
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

```

## input box

```javascript

function InputBox({
    label,
    
    className = "",
}) {
   

    return (
        <div>
            <div>
                <label>
                    label
                </label>
                <input
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select>
                        <option value="usd">
                            usd
                        </option>
                </select>
            </div>
        </div>
    );
}

export default InputBox;

```


## app js

```javascript
function App() {
    

    return (
        <div
            style={{
                backgroundImage: `url('${BackgroundImage}')`}}>
            <div className="w-full">
                <div>
                    <form onSubmit={(e) => { e.preventDefault();}}>
                        <div>
                            <InputBox
                                label="From"
                            />
                        </div>
                        <div>
                            <button type="button">
                                swap
                            </button>
                        </div>
                        <div>
                            <InputBox/>
                        </div>
                        <button type="submit">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

```
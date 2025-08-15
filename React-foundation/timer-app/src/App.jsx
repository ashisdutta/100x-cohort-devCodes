import { useState, useEffect } from 'react'


function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(function(){
    setInterval(function() {
      setCounterVisible(c=> !c);
      let clock = setInterval(function(){
      //setCount(count=>count+1);
      console.log("from inside the interval")
      setCount(function(count){
      return count+1;
    })
  },1000)

  return function(){
    console.log("on unmount");
    clearInterval(clock);
  }
    }, 5000)
  }, [])


  return <div>
    {counterVisible ? <Counter count={count}></Counter>: null}
  </div>
}


function Counter(){                                                   // when re-rendering happens everytime this fun gets called 



  return <div>
    <h1 id='text'>{props.count}</h1>
  </div>
}




export default App

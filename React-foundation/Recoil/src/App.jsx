import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";



function App(){

  return <div>
    <RecoilRoot>
      <Parent/>
    </RecoilRoot>
  </div>
}

function Parent(){

  return <div>
      
        <Increase/>
        <Decrease/>
        <Count/>

    </div>
}







function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={()=>{setCount(c=>c+1)}}>Increse</button>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={()=>{setCount(c=>c-1)}}>Decrease</button>
}

function Count(){
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}



export default App;

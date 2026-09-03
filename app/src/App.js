import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [prevcount, setPrevCount] = useState(0)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([])
  console.log(input)
  const AddFromInput = ()=>{
    if(input>0){
      setCount(count+parseInt(input))
    }
  }
  useEffect(()=>{
    const difference = count - prevcount
    if(difference!==0){

      setHistory((prevHistory)=>[...prevHistory,difference])
      setPrevCount(count)
    }
  },[count])
  console.log(history)
  return (
    <div className="App" style={{display:'flex', flexDirection:'column', height:'100%', alignItems:"center"}} >
      <h1 style={count >= 10 ? { color: 'green' } : { color: 'red' }}>
        {count}
      </h1>
      <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={()=> setCount(count-1)}>Subtract</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      </div>
      <div>
        <input type='number' min={0} onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=>{AddFromInput()}}>Add</button>
      </div>
      <div style={{position:"absolute", top:"0", left:"0", display:'flex', flexDirection:'row', alignItems:"flex-start"}}>
        <div>
        {history.map((item, idx)=>(
          item>0? <p key={idx} style={{color:"green"}}>+{item}</p>:<p key={idx} style={{color:"red"}}>{item}</p>
        ))}
        </div>
        <button style={{marginTop:"21px"}} onClick={()=>{setHistory([])}}>Clear</button>
      </div>
    </div>
  );
}

export default App;

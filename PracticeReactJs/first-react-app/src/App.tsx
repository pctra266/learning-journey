import { useState } from "react";
import FlashcardForm from "./Components/FlashcardForm";

function App() {
    let [counter, setCounter] = useState(0);
    const [input,setInput] = useState("");

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() =>{setCounter(++counter)}} > tang</button>
      <button onClick={() =>{setCounter(--counter)}}  > giam</button>
      <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={()=>{console.log(input)}} >Add to console log</button>
   {/* <FlashcardForm></FlashcardForm> */}
    </div>
  );
}

export default App;

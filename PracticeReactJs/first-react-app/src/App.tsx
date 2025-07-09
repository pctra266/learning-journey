import { useState } from "react";
import Login from "./Components/Login"
function App() {
    const [count, setCount] = useState(0);    

  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;

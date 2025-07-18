import { useState } from "react";
import Login from "./Components/Login"
import UserList from "./Components/UserList";
import ProductManager from "./Components/ProductManager";
function App() {
    const [count, setCount] = useState(0);    

  return (
    <div>
      <ProductManager></ProductManager>
    </div>
  );
}

export default App;

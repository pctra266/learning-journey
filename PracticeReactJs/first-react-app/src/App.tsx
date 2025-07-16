import { useState } from "react";
import Login from "./Components/Login"
import UserList from "./Components/UserList";
function App() {
    const [count, setCount] = useState(0);    

  return (
    <div>
      <UserList></UserList>
    </div>
  );
}

export default App;

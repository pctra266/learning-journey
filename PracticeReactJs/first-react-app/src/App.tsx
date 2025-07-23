import { useState, createContext,   } from "react";
import type {Dispatch, SetStateAction} from 'react'
import ProductManager from "./Components/ProductManager";
interface AuthContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

// Giá trị mặc định (dummy)
export const Authcontext = createContext<AuthContextType>({
  count: 0,
  setCount: () => {} // fake function, sẽ bị thay thế bởi Provider
});

function App() {
    const [count, setCount] = useState(0);    

  return (
    <Authcontext.Provider value={{count,setCount}} >
      <ProductManager></ProductManager>
    </Authcontext.Provider>
  );
}

export default App;

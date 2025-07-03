import { useState } from "react";
import FlashcardForm from "./Components/FlashcardForm";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
function App() {
    const [count, setCount] = useState(0);    

  return (
    <div>
      <Header count={count}></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;

import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["Zoro", "Nami", "Usopp", "Sanji", "Chopper"];
  return (
    <div>
      <ListGroup items={items} heading="StrawHat"></ListGroup>
    </div>
  );
}

export default App;

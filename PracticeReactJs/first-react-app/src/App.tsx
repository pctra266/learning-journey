import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["Zoro", "Nami", "Usopp", "Sanji", "Chopper"];
  const handleClick = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        <h1>We catch a treasure</h1> abc
      </Alert>
      <ListGroup
        items={items}
        heading="StrawHat"
        fun1={handleClick}
      ></ListGroup>
    </div>
  );
}

export default App;

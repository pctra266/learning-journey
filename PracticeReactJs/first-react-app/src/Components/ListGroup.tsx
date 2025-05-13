import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  fun1: (item: string) => void;
}

function ListGroup(prop: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const message = prop.items.length === 0 && <p>No items found</p>;

  return (
    <>
      <h1>{prop.heading}</h1>
      {message}
      <ul className="list-group">
        {prop.items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              prop.fun1(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

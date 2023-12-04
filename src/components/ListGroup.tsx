import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "Nairobi", "Canada", "Comptown", "Tokyo"];

  let SelectedIndex = 0
  // you can also add an if statement or functions

  {
    /* so as not to repeat yourself you can write */
  }

  function GetMessage() {
    return items.length == 0 && <p>No item</p>;
  }

  return (
    <Fragment>
      <h1>list</h1>
      {GetMessage()}
      <ul className="list-group">
        {/* in  jsx we do not use for loop so we use mapping method instead */}
        {/* we use {} since in jsx we can only use html elements or react components */}
        {items.map((item) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

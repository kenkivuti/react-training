import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "Nairobi", "Canada", "Comptown", "Tokyo"];

  return (
    <Fragment>
      <h1>list</h1>
      <ul className="list-group">
        {/* in  jsx we do not use for loop so we use mapping method instead */}
        {/* we use {} since in jsx we can only use html elements or react components */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

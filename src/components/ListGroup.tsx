import { Fragment, useState } from "react";
// items []; heading string
interface Props {
  items : string[];
  heading : string;

  onSelectItem: (item: string) => void
}


function ListGroup({items, heading,onSelectItem} : Props) {
  

  
  // this is alled a hook : it allows to tap in into built in features in react
  // using state hook means we are telling react that it will have data or state that will change over time
   let  [SelectedIndex , setSelectedIndex]= useState(-1);
   

  // you can also add an if statement or functions

  {
    /* so as not to repeat yourself you can write */
  }

  function GetMessage() {
    return items.length == 0 && <p>No item</p>;
  }

  return (
    <Fragment>
      <h1>{heading}</h1>
      {GetMessage()}
      <ul className="list-group">
        {/* in  jsx we do not use for loop so we use mapping method instead */}
        {/* we use {} since in jsx we can only use html elements or react components */}
        {items.map((item, index) => (
          <li
            className={ SelectedIndex == index ? "list-group-item active" : "list-group-item "}
            key={item}
            onClick={() => {setSelectedIndex(index); onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

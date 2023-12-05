import ListGroup from "./components/ListGroup";
const handleSelectItem =(item: string) => {
  console.log(item)
}
function App () {
  let items = ["New York", "Nairobi", "Canada", "Comptown", "Tokyo"];
  //  <Message/> this is called the self-closing syntax
  return <div><ListGroup items ={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App ;
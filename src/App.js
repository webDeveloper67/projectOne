import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import CreateNewItem from './components/CreateNewItem'
import DeleteLastItem from './components/DeleteLastItem';
import ItemList from './components/ItemList';


const App = () => {
  const [items, setItems] = useState([]);

  // Helper Function
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
}
const prevItem = usePrevious(items)

const handleAddItem = item => {
  setItems((prevItem) => [...prevItem, item]);
};


const handleDeleteLastItem = e => {
  setItems((prevItem) => [items.slice(0, -1)])
}

const noItemsFound = () => {
  return items.length === 0
}


  console.log(prevItem, 'prevItem')
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <CreateNewItem onAddItem={handleAddItem} />
      <DeleteLastItem
        onDeleteLastItem={handleDeleteLastItem}
        buttonDisabled={noItemsFound()}
      />
      <ItemList items={items} />
    </div>
  );
}



export default App;

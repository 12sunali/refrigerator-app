import React, { useState, useEffect } from 'react';
import AddItem from './Components/AddItem';
import ItemList from './Components/ItemList';
import ExpiredItems from './Components/ExpiredItems';
import ShoppingList from './Components/ShoppingList';

const App = () => {
  const [items, setItems] = useState([]); // Store items in the fridge
  const [history, setHistory] = useState([]); // Store consumption history

  // Function to add a new item with quantity and expiry date
  const addItem = (name, quantity, expiryDate) => {
    const newItem = {
      name,
      quantity: parseInt(quantity, 10),
      expiryDate: expiryDate || null,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to consume an item
  const consumeItem = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      setHistory((prevHistory) => [
        ...prevHistory,
        { ...updatedItems[index], consumed: 1 },
      ]);
    }

    if (updatedItems[index].quantity === 0) {
      updatedItems.splice(index, 1); // Remove item if quantity reaches 0
    }
    setItems(updatedItems);
  };

  // Function to get expired items
  const getExpiredItems = () => {
    const currentDate = new Date();
    return items.filter(
      (item) => item.expiryDate && new Date(item.expiryDate) < currentDate
    );
  };

  // Function to suggest items based on consumption
  const suggestShoppingList = () => {
    return items
      .filter((item) => item.quantity <= 1)
      .map((item) => <li key={item.name}>{item.name} (Buy more)</li>);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const expiredItems = getExpiredItems();
      if (expiredItems.length > 0) {
        alert('Some items have expired! Please remove them.');
      }
      setItems((prevItems) => prevItems.filter((item) => !expiredItems.includes(item)));
    }, 60000); // Check every 60 seconds

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, [items]);

  return (
    <div>
      <h1>Refrigerator Management</h1>
      <AddItem addItem={addItem} />
      <ItemList items={items} consumeItem={consumeItem} />
      <h2>Shopping List</h2>
      <ul>{suggestShoppingList()}</ul>

      {/* Display expired items */}
      <ExpiredItems items={getExpiredItems()} />
    </div>
  );
};

export default App;

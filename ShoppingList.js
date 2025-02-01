import React from 'react';

const ShoppingList = ({ items, history }) => {
  const suggestItemsBasedOnHistory = () => {
    const suggestion = items.filter((item) => {
      const consumption = history.filter((record) => record.name === item.name).length;
      return item.quantity <= 1 && consumption > 0;
    });

    return suggestion.map((item) => (
      <li key={item.name}>
        {item.name} - Buy more (Consumed {history.filter((record) => record.name === item.name).length} times)
      </li>
    ));
  };

  return (
    <div>
      <h3>Suggested Shopping List</h3>
      {items.length > 0 ? (
        <ul>{suggestItemsBasedOnHistory()}</ul>
      ) : (
        <p>No items to buy!</p>
      )}
    </div>
  );
};

export default ShoppingList;

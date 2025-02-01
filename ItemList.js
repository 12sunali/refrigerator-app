import React from 'react';

const ItemList = ({ items, consumeItem }) => {
  return (
    <div>
      <h2>Refrigerator Items</h2>
      {items.length === 0 ? (
        <p>No items in the fridge yet!</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <h3>{item.name} - Quantity: {item.quantity}</h3>
            {item.expiryDate && (
              <p>Expires on: {new Date(item.expiryDate).toDateString()}</p>
            )}
            <button onClick={() => consumeItem(index)}>Consume 1</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;

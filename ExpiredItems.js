import React from 'react';

const ExpiredItems = ({ items }) => {
  return (
    <div>
      <h3>Expired Items</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Expired on {new Date(item.expiryDate).toDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expired items!</p>
      )}
    </div>
  );
};

export default ExpiredItems;

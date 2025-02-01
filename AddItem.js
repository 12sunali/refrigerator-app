import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      addItem(name, quantity, expiryDate);
      setName('');
      setQuantity('');
      setExpiryDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;

import React, { useState } from 'react';
import './AddressForm.css';

const AddressForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    house: '',
    road: '',
    category: 'Home',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ house: '', road: '', category: 'Home' });
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <input
        type="text"
        placeholder="House/Flat No."
        value={formData.house}
        onChange={(e) => setFormData({ ...formData, house: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Road/Area"
        value={formData.road}
        onChange={(e) => setFormData({ ...formData, road: e.target.value })}
        required
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;

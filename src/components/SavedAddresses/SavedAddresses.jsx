import React from 'react';
import './SavedAddresses.css';

const SavedAddresses = ({ addresses, onSelect, onDelete }) => {
  return (
    <div className="saved-addresses">
      <h2>Saved Addresses</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            <p>
              {address.label} (Lat: {address.location[0]}, Lng: {address.location[1]})
            </p>
            <button onClick={() => onSelect(address)}>Select</button>
            <button onClick={() => onDelete(address.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedAddresses;

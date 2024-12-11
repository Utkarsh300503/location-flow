import React from 'react';
import './AddressModal.css';

const AddressModal = ({ savedAddresses, onSelect, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Saved Addresses</h2>
        <ul>
          {savedAddresses.map((address) => (
            <li key={address.id}>
              <button onClick={() => onSelect(address)}>
                {address.label} (Lat: {address.location[0]}, Lng: {address.location[1]})
              </button>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddressModal;

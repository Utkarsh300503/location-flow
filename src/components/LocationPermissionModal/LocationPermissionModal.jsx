import React from 'react';
import './LocationPermissionModal.css';

const LocationPermissionModal = ({ onEnableLocation, onManualSearch, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enable Location</h2>
        <p>Your location is required to provide better services.</p>
        <button onClick={onEnableLocation}>Enable Location</button>
        <button onClick={onManualSearch}>Search Manually</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LocationPermissionModal;

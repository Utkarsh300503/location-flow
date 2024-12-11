import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent/MapComponent';
import AddressForm from './components/AddressForm/AddressForm';
import SavedAddresses from './components/SavedAddresses/SavedAddresses';
import LocationPermissionModal from './components/LocationPermissionModal/LocationPermissionModal';
import './App.css';


const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null); 
  const [savedAddresses, setSavedAddresses] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(true); 

  
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          console.log("Fetched location:", position.coords);
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]); 
          setIsModalOpen(false); 
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
          alert('Unable to retrieve your location. Please enable location services.');
        },
        {
          enableHighAccuracy: true, 
          timeout: 5000, 
          maximumAge: 0, 
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  
  useEffect(() => {
    fetchUserLocation();
  }, []); 

 
  const saveAddress = (formData) => {
    if (currentLocation) {
      const newAddress = {
        id: Date.now(),
        label: `${formData.category} - ${formData.house}`,
        location: currentLocation,
      };
      setSavedAddresses((prev) => [...prev, newAddress]);
      alert('Address saved successfully!');
    } else {
      alert('No location to save. Please set your location first.');
    }
  };

  
  const selectAddress = (address) => {
    setCurrentLocation(address.location);
  };

  
  const deleteAddress = (id) => {
    setSavedAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  return (
    <div>
      <header>
        <h1>Location Flow App</h1>
      </header>

      {/* Show a loading message while fetching the location */}
      {!currentLocation ? (
        <p>Loading your location...</p>
      ) : (
        <>
          {/* Map Component */}
          <MapComponent
            currentLocation={currentLocation}
            onLocationChange={setCurrentLocation}
          />

          {/* Address Form */}
          <AddressForm onSave={saveAddress} />

          {/* Saved Addresses */}
          <SavedAddresses
            addresses={savedAddresses}
            onSelect={selectAddress}
            onDelete={deleteAddress}
          />
        </>
      )}

      {/* Location Permission Modal */}
      {isModalOpen && (
        <LocationPermissionModal
          onEnableLocation={fetchUserLocation}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Current Coordinates */}
      <footer style={{ marginTop: '20px' }}>
        <h3>Current Coordinates:</h3>
        {currentLocation ? (
          <p>
            Latitude: {currentLocation[0]}, Longitude: {currentLocation[1]}
          </p>
        ) : (
          <p>No location set</p>
        )}
      </footer>
    </div>
  );
};

export default App;

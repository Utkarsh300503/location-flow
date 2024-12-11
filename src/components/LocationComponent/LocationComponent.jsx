import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLocation } from '../redux/slices/locationSlice';

const LocationComponent = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.location.currentLocation);

  const updateLocation = () => {
    dispatch(setCurrentLocation({ lat: 37.7749, lng: -122.4194 }));
  };

  return (
    <div>
      <h2>Current Location: {currentLocation ? `${currentLocation.lat}, ${currentLocation.lng}` : 'Not set'}</h2>
      <button onClick={updateLocation}>Set Location</button>
    </div>
  );
};

export default LocationComponent;

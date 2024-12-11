import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    currentLocation: null,
    savedAddresses: [],
  },
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    addAddress: (state, action) => {
      state.savedAddresses.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.savedAddresses = state.savedAddresses.filter(
        (address) => address.id !== action.payload
      );
    },
  },
});

export const { setCurrentLocation, addAddress, removeAddress } = locationSlice.actions;
export default locationSlice.reducer;

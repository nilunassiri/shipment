/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    value: [],
    status: false,
  },
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },
    tuggleStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { save, tuggleStatus } = shipmentSlice.actions;

export const selectShipment = (state) => state.shipment.value;

export default shipmentSlice.reducer;

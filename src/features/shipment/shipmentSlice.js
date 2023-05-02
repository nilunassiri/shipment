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
    deleteShipment: (state, action) => {
      console.log("data after remove");
      state.value = state.value.filter((shipment) => shipment.orderNo !== action.payload);
      console.log(state.value);
    },
  },
});

export const { save, tuggleStatus, deleteShipment } = shipmentSlice.actions;

export const selectShipment = (state) => state.shipment.value;

export default shipmentSlice.reducer;

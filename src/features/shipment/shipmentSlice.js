/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    value: [
      {
        orderNo: "1",
        date: "123",
        customer: "23443",
        trackingNo: "34345",
        status: "456456",
        consignee: "567657",
      },
    ],
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

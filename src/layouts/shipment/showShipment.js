import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useSelector } from "react-redux";

function ShowShipment() {
  const shipment = useSelector((state) => state.shipment.value);
  console.log(shipment);
  return (
    <DashboardLayout>
      <h2>adasd</h2>
    </DashboardLayout>
  );
}
export default ShowShipment;

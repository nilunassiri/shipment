import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ShowShipment() {
  const shipmentSlicer = useSelector((state) => state.shipment);
  const routeParams = useParams();
  const { orderNo } = routeParams;
  const [shipmentData, setShipmentData] = useState(null);

  console.log(shipmentSlicer.status);
  if (shipmentSlicer.status) {
    setShipmentData(shipmentSlicer.value.filter((shipment) => shipment.orderNo === orderNo));
  }
  return (
    <DashboardLayout>
      <h2>{shipmentData}</h2>
    </DashboardLayout>
  );
}
export default ShowShipment;

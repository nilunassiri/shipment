import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ShowShipment() {
  const shipmentSlicer = useSelector((state) => state.shipment);
  const routeParams = useParams();
  const { orderNo } = routeParams;
  const [shipmentData, setShipmentData] = useState(null);
  const [date, setDate] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [trackingNo, setTrackingNo] = useState(null);
  const [status, setStatus] = useState(null);
  const [consignee, setConsignee] = useState(null);

  if (shipmentSlicer.status) {
    useEffect(() => {
      setShipmentData(shipmentSlicer.value.filter((shipment) => shipment.orderNo === orderNo));
    }, []);
  }

  useEffect(() => {
    if (shipmentData) {
      setDate(shipmentData[0].date);
      setCustomer(shipmentData[0].customer);
      setTrackingNo(shipmentData[0].trackingNo);
      setStatus(shipmentData[0].status);
      setConsignee(shipmentData[0].consignee);
    }
  }, [shipmentData]);

  return (
    <DashboardLayout>
      <h2>{orderNo}</h2>
      <h2>{date}</h2>
      <h2>{customer}</h2>
      <h2>{trackingNo}</h2>
      <h2>{status}</h2>
      <h2>{consignee}</h2>
    </DashboardLayout>
  );
}
export default ShowShipment;

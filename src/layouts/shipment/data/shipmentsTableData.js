import { useState } from "react";

export default function data(shipments) {
  const [shipmentData, setShipmentData] = useState([
    {
      orderNo: "",
      date: "",
      customer: "",
      trackingNo: "",
      status: "",
      consignee: "",
    },
  ]);

  if (shipments != null && shipmentData.length === 1) {
    const parsedShipmentData = [];
    // eslint-disable-next-line no-param-reassign
    shipments.forEach((shipment) => {
      parsedShipmentData.push({
        orderNo: shipment.orderNo,
        date: shipment.date,
        customer: shipment.customer,
        trackingNo: shipment.trackingNo,
        status: shipment.status,
        consignee: shipment.consignee,
        action: <a href="/shipment/detail"> Show Detail </a>,
      });
    });
    setShipmentData(parsedShipmentData);
  }

  return {
    columns: [
      { Header: "orderNo", accessor: "orderNo", width: "45%", align: "left" },
      { Header: "date", accessor: "date", align: "left" },
      { Header: "customer", accessor: "customer", align: "center" },
      { Header: "trackingNo", accessor: "trackingNo", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "consignee", accessor: "consignee", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: shipmentData,
  };
}

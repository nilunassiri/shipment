import MDButton from "components/MDButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteShipment } from "features/shipment/shipmentSlice";

export default function data(shipments) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  function showDetailNavigator(orderNo) {
    const mainPath = "/shipment/detail/";
    navigate(mainPath.concat(orderNo));
  }

  useEffect(() => {
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
        // eslint-disable-next-line react/button-has-type
        action: (
          <>
            <MDButton color="#ff8a80" onClick={() => showDetailNavigator(shipment.orderNo)}>
              Show Detail
            </MDButton>
            <MDButton color="#ff8a80" onClick={() => dispatch(deleteShipment(shipment.orderNo))}>
              Delete
            </MDButton>
          </>
        ),
      });
    });
    setShipmentData(parsedShipmentData);
  }, [shipments]);

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

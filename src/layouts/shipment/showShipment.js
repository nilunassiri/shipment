// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

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
      <Grid item xs={12} md={6} lg={6} py={2.5}>
        <Card>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="secondary"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Shipment Details Order No. {orderNo}
            </MDTypography>
          </MDBox>
          <MDBox mb={2.5} mx={5} mt={5}>
            <h5>Date: {date}</h5>
            <hr />
            <h5>Customer: {customer}</h5>
            <hr />
            <h5>Tracking No: {trackingNo}</h5>
            <hr />
            <h5>Status: {status}</h5>
            <hr />
            <h5>Consignee: {consignee}</h5>
          </MDBox>
        </Card>
      </Grid>
    </DashboardLayout>
  );
}
export default ShowShipment;

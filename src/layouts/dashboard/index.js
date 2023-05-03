// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import getShipmentData from "hooks/shipment/getShipmentDataHook";

function Dashboard() {
  const { data } = getShipmentData();
  console.log(data);
  return (
    <DashboardLayout>
      <Grid item xs={12} md={6} lg={4} py={2.5}>
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
              Personal Information
            </MDTypography>
          </MDBox>
          <MDBox mb={2.5} mx={5} mt={5}>
            <h4>Nilu Nassiri</h4>
            <h4>Front-End Developer - Intern</h4>
            <MDBox mb={2.5} py={5}>
              <h5>Phone No: +372 5401 9008</h5>
              <h5>Location: Tallinn, Estonia</h5>
              <h5>Email: nilu.nassiri@gmail.com</h5>
              <h5>
                Checkout My
                <a href="http://LinkedIn.com/in/nilu-nassiri"> LinkedIn</a>
              </h5>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;

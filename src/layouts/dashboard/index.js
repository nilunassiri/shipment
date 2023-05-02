// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={6} lg={6}>
        <MDBox mb={2.5}>
          <h2>My Profile</h2>
        </MDBox>
        <MDBox mb={2.5}>
          <h3>Nilu Nassiri</h3>
          <h3>Front-End Developer - Intern</h3>
          <MDBox mb={2.5} py={5}>
            <h4>Phone No: +372 5401 9008</h4>
            <h4>Address: Tallinn, Estonia</h4>
            <h4>Email: nilu.nassiri@gmail.com</h4>
            <h4>
              <a href="http://LinkedIn.com/in/nilu-nassiri">http://LinkedIn.com/in/nilu-nassiri</a>
            </h4>
          </MDBox>
        </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;

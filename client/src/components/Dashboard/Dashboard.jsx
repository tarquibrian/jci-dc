import React from "react";
import { AdminNavbar } from "../Navbar/Navbar";
import PanelBody from "../PanelBody/PanelBody";
import Sidebar from "../Sidebar/Sidebar";
import { Dashboard__Section } from "./DashboardStyles";

const Dashboard = ({ children }) => {
  const headerSize = "100px";
  const sidebarSize = "300px";
  return (
    <Dashboard__Section>
      <Sidebar  />
      {/* <Dashboard__Section headerMargin={headerSize}> */}
      {/* <AdminNavbar  /> */}
      {/* </Dashboard__Section> */}
      //PANEL VIEW
      <PanelBody>{children}</PanelBody>
    </Dashboard__Section>
  );
};

export default Dashboard;

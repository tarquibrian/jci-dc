import React from "react";
import { pdf_list } from "../../Data/pdf.";
import { Panel__Section } from "./PanelStyles";

const PanelBody = ({ children, marginLeft }) => {

  return (
    <Panel__Section marginLeft={marginLeft}>
      {children}
    </Panel__Section>
  );
};

export default PanelBody;

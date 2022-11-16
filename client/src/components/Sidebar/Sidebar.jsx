import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAut } from "../../context/authContext";
import { JCI__Logo, SidebarMenu, Sidebar__Section } from "./SidebarStyles";

import imgLogo from '../../images/jci-logo.png'

const Sidebar = ({ sidebarSize }) => {
  const { logout, setError } = useAut();

  const navigate = useNavigate();

  const sidebarMenu = [
    {
      name: "Perfil",
      path: "/jci-home",
    },
    {
      name: "Suscripciones",
      path: "/suscripciones",
    },
    {
      name: "Actas",
      path: "/actas",
    },
    {
      name: "Informes",
      path: "/informes",
    },
  ];

  const handleLogout = async () => {
    try {
      // setError("");
      await logout();
      // setModal(false);
      navigate("/login");
    } catch {
      console.log("failed");
    }
  };

  return (
    <Sidebar__Section sidebarSize={sidebarSize}>
      <JCI__Logo>
        <img src={imgLogo} alt="JCI logo" />
      </JCI__Logo>
      <h1>JCI - ADMIN</h1>
      <SidebarMenu>
        <ul>
          {sidebarMenu.map((item, i) => {
            return (
              <li key={i}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={handleLogout}>
          LOGOUT
        </button>
      </SidebarMenu>
    </Sidebar__Section>
  );
};

export default Sidebar;

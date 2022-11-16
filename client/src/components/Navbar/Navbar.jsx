import React from "react";
import {
  NavbarSection,
  NavbarContainer,
  NavbarLogo,
  NavbarLinks,
  NavbarButton,
  NavbarMenu,
  NavbarProfile,
  NavbarOptions,
} from "./NavbarStyles";
import NavbarImg from "../../images/jci-logo.png";
import profileImg from "../../images/profile.jpg";
import { nav_links } from "../../Data/navbar";
import { HiUser } from "react-icons/hi";
import { user_list } from "../../Data/users_list";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarSection height="100px" bgColor>
      <NavbarContainer>
        <NavbarLogo to="/">
          <img src={NavbarImg} alt="junior chamber international" />
        </NavbarLogo>
        <NavbarMenu>
          <NavbarLinks>
            {nav_links?.map(({ name, path }, i) => {
              return (
                <li>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              );
            })}
          </NavbarLinks>
          <NavbarButton to="/login">
            <button>
              <HiUser /> Acceder
            </button>
          </NavbarButton>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarSection>
  );
};

export const AdminNavbar = ({ headerSize }) => {
  return (
    <NavbarSection height={headerSize} bgColor="#e02b2b">
      <NavbarContainer>
        <NavbarLogo>
          <img src={NavbarImg} alt="junior chamber international" />
        </NavbarLogo>

        <NavbarOptions>
          <ul>
            <li>option1</li>
            <li>option2</li>
            <li>option3</li>
          </ul>
        </NavbarOptions>

        <NavbarProfile>
          <h2>Maria Aguirre Salazar</h2>
          <img src={profileImg} alt="junior chamber international" />
        </NavbarProfile>
      </NavbarContainer>
    </NavbarSection>
  );
};

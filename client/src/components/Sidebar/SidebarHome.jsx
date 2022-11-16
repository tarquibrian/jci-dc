import React from "react";

import styled from "styled-components";

const SidebarHome__Container = styled.div`
  display: none;
  position: fixed;
  inset: 0 0 0 80%;
  background: rgba(140, 156, 173, 0.9);
  backdrop-filter: blur(1rem);
  border-left: 1px solid black;
  z-index: 99;
  /* transform: translateX(100%); */
`;

const SidebarHome = () => {
  return (
    <SidebarHome__Container>
      <h1>SIDEBAR HOME</h1>
      <br />
      <h2>MENU</h2>
      <button>
      </button>
      <ul>
        <li>
          <a href="#">option1</a>
        </li>
        <li>
          <a href="#">option2</a>
        </li>
        <li>
          <a href="#">option3</a>
        </li>
        <li>
          <a href="#">option4</a>
        </li>
        <li>
          <a href="#">option5</a>
        </li>
      </ul>
    </SidebarHome__Container>
  );
};

export default SidebarHome;

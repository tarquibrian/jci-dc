import styled from "styled-components";

export const Sidebar__Section = styled.section`
  position: fixed;
  height: 100%;
  width: ${({ sidebarSize }) => (sidebarSize ? sidebarSize : "280px")};
  max-width: 300px;
  overflow: auto;
  color: black;
  z-index: 11;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  li {
    /* padding: 0.5rem 0; */
    h2 {
      background: #1d3147;
      color: var(--color-secondary);
      font-size: 18px;
      font-weight: 400;
    }
  }
`;

export const JCI__Logo = styled.div`
  /* padding: 1rem 2.6rem; */
  /* margin: 2rem 4rem; */
  background: tomato;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const SidebarMenu = styled.div`
  ul {
    li{
      background-color: red;
      a {
        background-color: blue;
        color: black;
      }
    }
  }
`
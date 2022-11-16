import styled from "styled-components";

export const Panel__Section = styled.section`

  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "300px")};
  border-top: 2px solid red;
  table {
    /* width: 1200px; */
    position: relative;
    display: block;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #49a09d, #5f2c82);

    /* @media screen and (max-width: 1500px) {
      width: 100px;
    } */
  }

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: rgb(27, 30, 36);
      color: rgb(220, 220, 220);
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: rgba(255, 255, 255, 0.6);
          z-index: -1;
        }
      }
    }
  }

  input#check {
    position: absolute;
    opacity: 0;

    &:checked + label svg path {
      stroke-dashoffset: 0;
    }

    &:focus + label {
      transform: scale(1.03);
    }
  }

  #check + label {
    display: block;
    border: 4px solid #333;
    width: var(--d);
    height: var(--d);
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:active {
      transform: scale(1.05);
      border-radius: 30px;
    }

    svg {
      pointer-events: none;
      width: 10px;
      height: 10px;
      path {
        fill: none;
        stroke: #333;
        stroke-width: 4px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 100;
        stroke-dashoffset: 101;
        transition: all 350ms cubic-bezier(1, 0, 0.37, 0.91);
      }
    }
  }
`;

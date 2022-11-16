import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  min-height: 100px;
  height: auto;
  .font1 {
    font-size: 38px;
    font-weight: 600;
  }
  .font2 {
    font-size: 16px;
  }
  .font3 {
    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ul className="font1">
        <li>option1</li>
        <li>option2</li>
        <li>option3ww</li>
        <li>option4</li>
      </ul>
      <ul className="font2">
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5</li>
      </ul>
      <ul className="font3">
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5ww</li>
      </ul>
      <ul className="font1">
        <li>option1</li>
        <li>option2</li>
        <li>option3ww</li>
        <li>option4</li>
      </ul>
      <ul className="font2">
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5</li>
      </ul>
      <ul className="font3">
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5ww</li>
      </ul>
      <ul className="font1">
        <li>option1</li>
        <li>option2</li>
        <li>option3ww</li>
        <li>option4</li>
      </ul>
      <ul className="font2">
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5</li>
      </ul>
      <ul className="font3">
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5ww</li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;

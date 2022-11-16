import styled, { css } from "styled-components";

export const Global__Section = styled.section`
  max-width: 1920px;
  height: 100%;
  margin: auto;
  /* box-shadow: rgba(0, 0, 0, 0.8) 0px 22px 70px 4px; */
  box-shadow: rgba(0, 0, 0, 0.8) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

export default mixins;

import styled from "styled-components";

export const ActasSection = styled.div`
  color: black;

  ul {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid grey;
      img {
        display: block;
        width: 3rem;
      }
    }
  }
`;

export const Files__Container = styled.div``;

export const File__Card = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4rem;
  background: var(--primaryLightColor);
  border-radius: 5px;
  margin-bottom: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    display: block;
    width: 3rem;
  }
`;

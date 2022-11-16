import styled from "styled-components";
import Hexagon from "../../assets/Hexagon.svg";

export const LoginSection = styled.section`
  width: 100%;
  height: 100vh;

  background-color: #ffaa00;
  background: url(${Hexagon});
  background-attachment: fixed;
  background-size: cover;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  box-shadow: 0 18px 200px -60px black;
  border-radius: 10px;
  position: relative;
  backdrop-filter: blur(8px);
  border: 2px solid #ffffff40;
  background: rgba(32, 180, 227, 0.6);

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    h1 {
      font-size: 30px;
    }
  }
`;
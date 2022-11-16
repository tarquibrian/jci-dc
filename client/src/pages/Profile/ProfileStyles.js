import styled from "styled-components";

export const Profile__Section = styled.section`
  /* display: flex; */
  display: block;
  position: relative;
  /* background: tomato; */
`;

export const Profile__Header = styled.header`
  /* overflow: hidden; */
  display: flex;
  /* width: 900px;
  height: 400px; */
  /* z-index: 111; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-end; */
`;

export const Header__Card = styled.div`
  position: relative;
  /* flex-basis: 70%; */
  height: 480px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  /* margin: auto; */
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid red;

  h1 {
    z-index: 999;
  }

  p {
    z-index: 999;
    /* font-weight: 400; */
    color: white;

    span {
      font-weight: bolder;
    }
  }
`;

export const Card__Video = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: 99; */
  /* box-shadow: 0px -17px 2px 10px #000 inset; */
  }
`;

import styled from "styled-components";
import imgBG from "../../assets/bg/image-aht5tus2.png";

export const Hero__Section = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  /* background: rgb(29, 49, 71); */
  /* background: rgb(14, 24, 35); */
  background: url(${imgBG});
  /* filter: brightness(50%); */
`;

export const Hero__Topper = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
`;

export const Topper__HomeTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  /* margin: 0 auto; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";
  color: rgb(32, 180, 227);
  h1 {
    .text-stroke {
      color: transparent;
      font-size: 6vw;
      -webkit-text-stroke: 1px white; /* width and color */
    }
    span {
      font-size: 9vw;
    }
  }
  h2 {
    margin-top: -1.5vw;
    /* color: rgb(158, 27, 52); */
    font-size: 2.2vw;
  }
`;

export const Topper__Gallery = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const Gallery__Column = styled.div`
  /* height: 1900px; */
  display: flex;
  flex-direction: column;

  animation: ${({ animationTime }) =>
    animationTime
      ? `slide1 ${animationTime} linear infinite`
      : "slide1 70s linear infinite"};

  figure {
    flex: auto;
    padding-bottom: 1rem;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(50%);
      /* background: #0C141C; */
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
  }

  @keyframes slide1 {
    0% {
      transform: translate3d(0, 0%, 0);
    }
    100% {
      transform: translate3d(0, -50%, 0);
    }
    /* 100% {
    transform: translate3d(0, 0, 0);
  } */
  }
`;

export const Hero__Latest = styled.div`
  height: 100%;
  width: 100%;
`;

import React from "react";
import styled from "styled-components";

import img1 from "../../images/gallery/img4.jpg";
import imgbg from "../../assets/bg/image-aht5tus2.png";

const Acknowledge__Section = styled.section`
  /* background-color: red; */
  padding: 7rem 0;
  /* background: url(${imgbg}); */
  /* color: #dddddd; */
`;

const Acknowledge__Container = styled.div`
  width: 80%;
  max-width: 1900px;
  margin-inline: auto;
  /* align-items: center; */
  /* background: gray; */
`;

const Acknowledge__Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  h1 {
    font-size: 48px;
  }
`;

const Acknowledge__Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 4rem;
`;

const Body__Images = styled.div`
  max-width: 700px;
  justify-self: end;
`;

const Image__Card = styled.div`
  height: 500px;
  margin-bottom: 1rem;
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Body__Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Description__Card = styled.div`
  padding: 1rem;
  border: 1px solid black;
  width: fit-content;
  /* border-radius: 6px; */
  box-shadow: 2px 2px;
  transition: 0.3s ease;
  &:hover {
    box-shadow: 12px 12px;
    transform: translate(-12px, -12px);
    background: #337aff;
    /* cursor: pointer; */
  }
`;

const Acknowledgments = () => {
  return (
    <Acknowledge__Section>
      <Acknowledge__Container>
        <Acknowledge__Title>
          <h1>Reconocimientos</h1>
        </Acknowledge__Title>

        <Acknowledge__Body>
          <Body__Images>
            <Image__Card>
              <img src={img1} alt="" />
            </Image__Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, est
              ipsum nulla earum non eum repudiandae qui provident ut culpa
              dolorum cumque iure suscipit perspiciatis velit a, dolores id
              debitis?
            </p>
          </Body__Images>
          <Body__Description>
            <Description__Card>
              <h2>TITLE</h2>
              <p>18 de agosto de 2020</p>
            </Description__Card>
            
          </Body__Description>
        </Acknowledge__Body>
      </Acknowledge__Container>
    </Acknowledge__Section>
  );
};

export default Acknowledgments;

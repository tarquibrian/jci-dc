import React from "react";
import styled from "styled-components";
import img1 from "../../images/jci/img1.jpg";

const Features__Section = styled.section`
  background-color: #ebf9ff;
  padding: 7rem 0;
  display: grid;
`;

const Features__Container = styled.div`
  width: 80%;
  /* height: 500px; */
  max-width: 1900px;
  margin-inline: auto;
  gap: 4rem;
  display: flex;
  flex-direction: column;
`;

const Features__ContainerTitle = styled.div`
  display: grid;
  place-content: center;
  width: 60%;
  margin-inline: auto;
  h1 {
    margin-inline: auto;
    font-size: 48px;

    span {
      /* font-family: "Oswald"; */
      color: transparent;
      /* font-size: 60px; */
      -webkit-text-stroke: 1px var(--color-secondary); /* width and color */
    }
  }
  p {
    text-align: center;
  }
`;

const Features__ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Features__SectionLeft = styled.div`
  max-width: 300px;
  background: gray;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Features__SectionRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Features__Card = styled.div`
  /* width: 100%; */
  /* min-width: 240px; */
  max-width: 270px;
  border: 1px solid black;
  /* border-radius: 6px; */
  transition: 0.2s ease;
  padding: 2rem;
  box-shadow: 2px 2px;

  &:hover {
    box-shadow: 12px 12px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "skyblue")};
    border: none;
    transform: translate(-12px, -12px);
  }

  img {
    /* display: block; */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Features = () => {
  return (
    <Features__Section>
      <Features__Container>
        <Features__ContainerTitle>
          <h1>
            ¿Qué hacemos en <span>JCI</span>?
          </h1>
          <p>
            La JCI es un acrónimo de Junior Chamber Internacional, Se trata de
            una hermandad internacional de ciudadanos de entre 18 y 40 años, con
            el objetivo y el propósito de crear un cambio positivo en el mundo.
          </p>
          <p>
            Las Organizaciones Nacionales federadas a la JCI funcionan en más de
            8000 Organizaciones Locales en 123 naciones y territorios,
            aproximadamente 250.000 personas se encuentran afiliadas a la
            organización
          </p>
        </Features__ContainerTitle>
        <Features__ContainerBody>
          <Features__SectionLeft>
            <h2>TITULO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              accusamus obcaecati harum! Reiciendis esse cumque dignissimos
              ipsam
            </p>
            <button>Ser Miembro</button>
          </Features__SectionLeft>
          <Features__SectionRight>
            <Features__Card bgColor="red">
              <h2>TITULO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur
              </p>
            </Features__Card>
            <Features__Card bgColor="blue">
              <h2>TITULO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur
              </p>
            </Features__Card>
            <Features__Card bgColor="yellow">
              <h2>TITULO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur
              </p>
            </Features__Card>
            <Features__Card bgColor="orange">
              <h2>TITULO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur
              </p>
            </Features__Card>
          </Features__SectionRight>
        </Features__ContainerBody>
      </Features__Container>
    </Features__Section>
  );
};

export default Features;

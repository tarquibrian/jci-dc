import { Link } from "react-router-dom";
import React from "react";
import {
  Gallery__Column,
  Hero__Latest,
  Hero__Section,
  Hero__Topper,
  Topper__Gallery,
  Topper__HomeTitle,
} from "./HeroStyles";
import HeroImg from "../../images/reunion11.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { useAut } from "../../context/authContext";

import img1 from "../../images/gallery/img1.jpg";
import img2 from "../../images/gallery/img2.jpg";
import img3 from "../../images/gallery/img3.jpg";
import img4 from "../../images/gallery/img4.jpg";
import img5 from "../../images/gallery/img5.jpg";

import cat1 from "../../images/gallery/cat2.jpg";
import cat2 from "../../images/gallery/cat3.jpg";
import cat3 from "../../images/gallery/cat4.jpg";
import cat4 from "../../images/gallery/cat5.jpg";
import cat5 from "../../images/gallery/cat6.jpg";

import dog1 from "../../images/gallery/dog1.jpg";
import dog2 from "../../images/gallery/dog2.jpg";
import dog3 from "../../images/gallery/dog3.jpg";
import dog4 from "../../images/gallery/dog4.jpg";
import dog5 from "../../images/gallery/dog5.jpg";

import jciImg1 from "../../images/jci/img1.jpg";
import jciImg2 from "../../images/jci/img2.jpg";
import jciImg3 from "../../images/jci/img3.jpg";
import jciImg4 from "../../images/jci/img4.jpg";
import jciImg5 from "../../images/jci/img5.jpg";
import jciImg6 from "../../images/jci/img6.jpg";
import jciImg7 from "../../images/jci/img7.jpg";
import jciImg8 from "../../images/jci/img8.jpg";

const Hero = () => {
  const { currentUser } = useAut();
  console.log("user", currentUser);
  return (
    <Hero__Section>
      <Hero__Topper>
        {/* <Topper__HomeTitle>
          <h1>
            <span>J</span>
            <span>C</span>
            <span>I</span>
            <span> </span>
            <span className="text-stroke">C</span>
            <span className="text-stroke">O</span>
            <span className="text-stroke">C</span>
            <span className="text-stroke">H</span>
            <span className="text-stroke">A</span>
            <span className="text-stroke">B</span>
            <span className="text-stroke">A</span>
            <span className="text-stroke">M</span>
            <span className="text-stroke">B</span>
            <span className="text-stroke">A</span>
          </h1>
          <h2>Cámara Junior Internacional</h2>
        </Topper__HomeTitle> */}
        <Topper__Gallery>
          {/* <Gallery__Column animationTime="130s">
            <figure className="item">
              <img src={img2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={img1} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={img3} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={img2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={img1} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={img3} alt="" loading="lazy" />
            </figure>
          </Gallery__Column>
          <Gallery__Column animationTime="90s">
            <figure className="item">
              <img src={cat2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={cat4} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={cat4} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={cat2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={cat4} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={cat4} alt="" loading="lazy" />
            </figure>
          </Gallery__Column>
          <Gallery__Column animationTime="150s">
            <figure className="item">
              <img src={dog1} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog3} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog4} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog1} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog3} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={dog4} alt="" loading="lazy" />
            </figure>
          </Gallery__Column> */}
          <Gallery__Column animationTime="130s">
            <figure className="item">
              <img src={jciImg1} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg3} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg1} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg2} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg3} alt="" loading="lazy" />
            </figure>
          </Gallery__Column>
          <Gallery__Column animationTime="90s">
            <figure className="item">
              <img src={jciImg4} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg5} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg6} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg4} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg5} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg6} alt="" loading="lazy" />
            </figure>
          </Gallery__Column>
          <Gallery__Column animationTime="150s">
            <figure className="item">
              <img src={jciImg6} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg7} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg8} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg6} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg7} alt="" loading="lazy" />
            </figure>
            <figure className="item">
              <img src={jciImg8} alt="" loading="lazy" />
            </figure>
          </Gallery__Column>
        </Topper__Gallery>
      </Hero__Topper>
      <Hero__Latest>
        <h1></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
          odio illo assumenda asperiores deserunt consequuntur modi temporibus,
          dolores eum consectetur laudantium recusandae, delectus, sed corrupti
          iste sapiente voluptatem magni!
        </p>
      </Hero__Latest>
    </Hero__Section>
  );
};

export default Hero;

import React from "react";
import "./GalleryStyles.css";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

import cat1 from "./cat2.jpg";
import cat2 from "./cat3.jpg";
import cat3 from "./cat4.jpg";
import cat4 from "./cat5.jpg";
import cat5 from "./cat6.jpg";

import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";
import dog4 from "./dog4.jpg";
import dog5 from "./dog5.jpg";

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div class="scrolling-image-container">
        <div class="scrolling-image1 imgSize">
          <figure className="item">
            <img src={img2} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={img1} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={img3} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={img2} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={img1} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={img3} alt="" loading="lazy"/>
          </figure>
        </div>
        <div class="scrolling-image2 imgSize">
          <figure className="item">
            <img src={cat2} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={cat4} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={cat4} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={cat2} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={cat4} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={cat4} alt="" loading="lazy"/>
          </figure>
        </div>
        <div class="scrolling-image3 imgSize">
          <figure className="item">
            <img src={dog1} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog2} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog3} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog4} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog1} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog2} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog3} alt="" loading="lazy"/>
          </figure>
          <figure className="item">
            <img src={dog4} alt="" loading="lazy"/>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

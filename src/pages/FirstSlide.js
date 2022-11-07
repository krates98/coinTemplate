import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/firstSlide.css";

AOS.init();

const FirstSlide = () => {
  return (
    <>
      <div className="container demo">
        <div className="content" data-aos="fade-right" data-aos-duration="1500">
          <h1>Mobile App Toolkit for Crypto & Finance Professionals</h1>
        </div>

        <div
          className="contentImage"
          data-aos="fade-left"
          data-aos-duration="1500">
          <LazyLoadImage
            effect="blur"
            src="images/blockchain.png" // use normal <img> attributes as props
            placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
          />
        </div>

        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </>
  );
};

export default FirstSlide;

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./styles/whatIs.css";

AOS.init();

const Whatis = () => {
  return (
    <>
      <div className="about">
        <div className="container whatIs2">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="titleWhat">
            <h1>ABOUT BULLSEYE</h1>
          </div>
          <div className="whatIsContainer">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="whatIsImage">
              <LazyLoadImage
                width={600}
                height={600}
                effect="blur"
                src="images/whatisCrypto.png" // use normal <img> attributes as props
                placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="whatIsText">
              <h1>We are your crypto broker</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget erat sit amet nulla semper imperdiet. Suspendisse et ligula
                justo. Fusce quis egestas odio. Maecenas mollis posuere est, vel
                vulputate tortor.
              </p>
              <p>
                Maecenas eget consectetur mi. Ut feugiat nisl ut purus rhoncus
                ultrices. Etiam accumsan massa sed dolor mollis, nec dapibus
                augue rhoncus. Sed vitae interdum sapien, quis laoreet magna.
                Sed egestas sed orci non fringilla. Vivamus a metus mattis,
                suscipit velit sagittis, ultricies dolor.
              </p>
              <p>
                Donec commodo libero idex finibus, eu condimentum dui euismod.
                Vivamus justo erat, aliquam et dui sed, imperdiet rhoncus dui.
                Phasellus porta, dui id hendrerit viverra, augue neque malesuada
                sem, eu facilisis lorem sapien in massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatis;

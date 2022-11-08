import React from "react";
import "./styles/ourTeam.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <div className="titleWhat">
        <h1>OUR TEAM</h1>
      </div>
      <section class="speakers-section">
        <div class="container">
          <div class="row">
            <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <LazyLoadImage
                      effect="blur"
                      src="/images/team/1.jpg" // use normal <img> attributes as props
                      placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                    />

                    <div class="social-links">
                      <ul>
                        <li>
                          <a href="#">
                            <span class="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-linkedin-in"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-pinterest-p"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div
              class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <LazyLoadImage
                      effect="blur"
                      src="/images/team/2.jpeg" // use normal <img> attributes as props
                      placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                    />
                    <div class="social-links">
                      <ul>
                        <li>
                          <a href="#">
                            <span class="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-linkedin-in"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-pinterest-p"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div
              class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <LazyLoadImage
                      effect="blur"
                      src="/images/team/3.jpg" // use normal <img> attributes as props
                      placeholderSrc="https://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png"
                    />

                    <div class="social-links">
                      <ul>
                        <li>
                          <a href="#">
                            <span class="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-linkedin-in"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-pinterest-p"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

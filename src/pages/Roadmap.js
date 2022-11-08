import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/roadmap.css";

AOS.init();

const Roadmap = () => {
  return (
    <>
      <div className="roadmap">
        <div className="container">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="titleWhat">
            <h1>ROADMAP</h1>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="Yearly-timeline">
                <div
                  class="timeline"
                  data-aos="fade-right"
                  data-aos-duration="1500">
                  <a href="http://www.google.com" class="timeline-content">
                    <div class="timeline-icon">
                      <i class="fa fa-instagram"></i>
                    </div>
                    <h3 class="title">2018-2021</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo Integer males uada tellus lorem, et condimentum
                      neque commodo
                    </p>
                  </a>
                </div>
                <div
                  class="timeline"
                  data-aos="fade-left"
                  data-aos-duration="1500">
                  <a href="http://www.google.com" class="timeline-content">
                    <div class="timeline-icon">
                      <i class="fa fa-twitter"></i>
                    </div>
                    <h3 class="title">2013-2017</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo Integer males uada tellus lorem, et condimentum
                      neque commodo
                    </p>
                  </a>
                </div>
                <div
                  class="timeline"
                  data-aos="fade-right"
                  data-aos-duration="1500">
                  <a href="http://www.google.com" class="timeline-content">
                    <div class="timeline-icon">
                      <i class="fa fa-facebook"></i>
                    </div>
                    <h3 class="title">2009-2012</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo Integer males uada tellus lorem, et condimentum
                      neque commodo
                    </p>
                  </a>
                </div>
                <div
                  class="timeline"
                  data-aos="fade-left"
                  data-aos-duration="1500">
                  <a href="http://www.google.com" class="timeline-content">
                    <div class="timeline-icon">
                      <i class="fa fa-linkedin"></i>
                    </div>
                    <h3 class="title">2006-2009</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer males uada tellus lorem, et condimentum neque
                      commodo Integer males uada tellus lorem, et condimentum
                      neque commodo
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { PieChart, PieArcSeries } from "reaviz";

import "./styles/tokenomics.css";

AOS.init();

const Tokenomics = () => {
  const height = 450;
  const width = 550;
  const padAngle = 0.03;
  const padRadius = 200;
  const cornerRadius = 4;
  const color = "YlGnBu";
  const data = [
    { key: "Phishing Attack", data: 10 },
    { key: "IDS", data: 14 },
    { key: "Malware", data: 5 },
    { key: "DLP", data: 18 },
    { key: "Random", data: 5 },
  ];
  return (
    <>
      <div className="tokenmics">
        <div className="container">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="titleWhat">
            <h1>TOKENOMICS</h1>
          </div>
          <div className="whatIsContainer">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="pieChart">
              <PieChart
                width={width}
                height={height}
                data={data}
                fontSize={50}
                series={
                  <PieArcSeries
                    cornerRadius={cornerRadius}
                    padAngle={padAngle}
                    padRadius={padRadius}
                    doughnut={true}
                    colorScheme={color}
                  />
                }
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="whatIsText">
              <h1>We are your crypto tokenomics</h1>
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
          <div
            className="underPieChart"
            data-aos="fade-right"
            data-aos-duration="1500">
            <div className="underPie">
              <h1>Something Related</h1>
            </div>
            <div className="underPieText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              fermentum consequat fringilla. Sed dictum posuere neque, ac
              placerat erat semper id. Fusce consectetur diam quis interdum
              eleifend. Aenean tempus mauris quis bibendum condimentum. Vivamus
              facilisis vehicula libero. Duis congue lacinia justo, laoreet
              mattis neque lobortis facilisis. Cras commodo consequat dapibus.
              Aliquam et quam vitae nulla fermentum tincidunt. Nam semper
              molestie erat, et sodales dolor bibendum et. Praesent fermentum
              malesuada velit, vitae rutrum enim congue vitae. Nam sodales felis
              et turpis scelerisque, vel sodales est tincidunt. Donec non ante
              odio.
            </div>
          </div>
          <div className="marginBottomSet"></div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;

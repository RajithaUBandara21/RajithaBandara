import React from 'react';
// import {
//   CircularProgressbar,
//   buildStyles
// } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from 'aos';
AOS.init();


const hero = () => {
	return (
    <div className="v-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              About Me
            </h2>
            <div
              className="space-border"
              data-aos="fade-up"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            ></div>
          </div>
          <div
            className="col-md-8 text-center m-auto"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <p>
              I'm Rajitha Bandara, a passionate and self-motivated individual
              who thrives on learning and adapting to new challenges. With a
              strong problem-solving mindset and leadership skills, I excel in
              teamwork, decision-making, and strategic planning. I embrace
              growth, innovation, and continuous improvement in everything I do.
            </p>
          </div>
        </div>


        <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-12 text-center">
          <h2>Skills</h2>
          <div className="space-border"></div>
        </div>
      </div>
        
        <div className="row flex-center mt-5">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/java.png" alt="gallery" />
            <h4 className="mt-2">JAVA</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/C.png" alt="gallery" />
            <h4 className="mt-2">C</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/js.png" alt="gallery" />
            <h4 className="mt-2">JAVA SCRIPT</h4>
          </div>
        </div>

        <div className="row flex-center mt-5">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/reactIcon.png" alt="gallery" />
            <h4 className="mt-2">REACT</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/nodejs.png" alt="gallery" />
            <h4 className="mt-2">NODEJS</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/HTML.png" alt="gallery" />
            <h4 className="mt-2">HTML</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/css.png" alt="gallery" />
            <h4 className="mt-2">CSS</h4>
          </div>
        </div>

        <div className="row flex-center mt-5">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/mongodb.png" alt="gallery" />
            <h4 className="mt-2">MONGO DB</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/mysql.png" alt="gallery" />
            <h4 className="mt-2">MY SQL</h4>
          </div>
        </div>

        <div className="row flex-center mt-5">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/figma.png" alt="gallery" />
            <h4 className="mt-2">FIGMA</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/mui.png" alt="gallery" />
            <h4 className="mt-2"> MATERIAL UI</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/tailwind css.png" alt="gallery" />
            <h4 className="mt-2"> TAILWIND CSS</h4>
          </div>
        </div>
        <div className="row flex-center mt-5">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/PS.png" alt="gallery" />
            <h4 className="mt-2">PHOTOSHOP</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <img src="./img/lr.png" alt="gallery" />
            <h4 className="mt-2">LIGHTROOM</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
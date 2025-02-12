import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(false);
    const handleBtnClick = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx1, setlighbx1] = React.useState(false);
    const handleBtnClick1 = (): void => {
      setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose1 = (): void => {
      setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx2, setlighbx2] = React.useState(false);
    const handleBtnClick2 = (): void => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose2 = (): void => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };
    return (
      <div className="container">
        <GlobalStyles />
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Projects</h2>
            <div className="space-border"></div>
          </div>
        </div>

        <Masonry className={"row my-gallery-class"} elementType={"div"}>
          {/* Doctor booking system */}
          <div
            className="col-lg-4 image-element-class de_modal de_modal"
            onClick={handleBtnClick}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3>Doctor Booking System</h3>
                <h5 className="d-tag">Web Applicaion</h5>
              </div>
              <img src="./img/gallery/1.jpg" alt="gallery" />
            </div>
          </div>

          {/* Rover  */}
          <div
            className="col-lg-4 image-element-class de_modal"
            onClick={handleBtnClick1}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3>Rescue rover</h3>
                <h5 className="d-tag">IOT based project</h5>
              </div>
              <img src="./img/gallery/2.png" alt="gallery" />
            </div>
          </div>

          {/*  Laboratory Management System */}

          <div
            className="col-lg-4 image-element-class de_modal"
            onClick={handleBtnClick2}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3> Laboratory Management System</h3>
                <h5 className="d-tag">website</h5>
              </div>
              <img src="./img/gallery/3.png" alt="gallery" />
            </div>
          </div>

          {/* <div
            className="col-lg-4 image-element-class de_modal"
            onClick={handleBtnClick}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3>Bluetec App</h3>
                <h5 className="d-tag">website</h5>
              </div>
              <img src="./img/gallery/4.jpg" alt="gallery" />
            </div>
          </div> */}

          {/* <div
            className="col-lg-4 image-element-class de_modal"
            onClick={handleBtnClick1}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3>Uhost Hosting</h3>
                <h5 className="d-tag">website</h5>
              </div>
              <img src="./img/gallery/5.jpg" alt="gallery" />
            </div>
          </div> */}

          {/* <div
            className="col-lg-4 image-element-class de_modal"
            onClick={handleBtnClick2}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3>Bolo Creative</h3>
                <h5 className="d-tag">website</h5>
              </div>
              <img src="./img/gallery/6.jpg" alt="gallery" />
            </div>
          </div> */}
        </Masonry>

        {/* Booking system*/}
        {lighbx && (
          <div className="LightboxGal">
            <div className="closeGal">
              <button
                className="button-close"
                onClick={handleBtnClickclose}
              ></button>
            </div>
            <div className="v-center w-100">
              <div className="mainLightbox container">
                <div className="row g-5">
                  <div className="col-lg-8">
                    <img
                      src="./img/gallery-big/1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-lg-4 de_project-info">
                    <h3>Doctor Booking System</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Medicare-Booking is a web app for easy medical appointment
                      booking and management.
                      <br />
                      <br />
                      <strong>
                        <h3>Tech Stack</h3>
                      </strong>

                      <ul />
                      <li>Front-End: React.js, Tailwind CSS, Vite</li>
                      <li>Back-End: Node.js, Express.js, MongoDB</li>
                      <li>Authentication: JWT</li>
                      <br />
                      <strong> 
                        <h3>
                        Key Features:</h3>
                      </strong>
                  
                      
                      <ul>
                        <li>
                          Secure Login: Patients and doctors can register and
                          login.
                        </li>
                        <li>
                          Doctor Profiles: View specialties, availability, and
                          reviews.
                        </li>
                        <li>
                          Appointment Booking: Patients can schedule
                          appointments easily.
                        </li>
                        <li>
                          Dashboards: Separate portals for doctors and patients.
                        </li>
                        <li>
                          Reviews & Ratings: Patients can rate and review
                          doctors.
                        </li>
                        <li>
                          Responsive Design: Works smoothly on all devices.
                        </li>
                        <li>
                          Search & Filter: Find doctors by specialty,
                          location,etc.
                        </li>
                        <li>
                          Notifications: Email alerts for confirmations and
                          reminders.
                        </li>
                      </ul>
                      <br />
                      This app simplifies healthcare access for patients and
                      helps doctors manage appointments efficiently.
                    </p>
                    <br />
                    {/* <div className="de_project-details">
                      <div className="d-field">
                        <i className="fa fa-user-o"></i>Client:{" "}
                        <span>Envato</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-file-text-o"></i>Type:{" "}
                        <span>Branding</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-calendar-o"></i>Year:{" "}
                        <span>2020</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-external-link"></i>Preview:{" "}
                        <span>
                          <a
                            href="https://www.envato.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            www.envato.com
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div className="spacer-30"></div>
                    {/* <blockquote>
                      "Very well done theme. Versatile, extremely well coded,
                      and gorgeous. That's a great combo. Highly recommended."
                      <span>John Archi</span>
                    </blockquote> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}












        {/* Rover */}
        {lighbx1 && (
          <div className="LightboxGal">
            <div className="closeGal">
              <button
                className="button-close"
                onClick={handleBtnClickclose1}
              ></button>
            </div>
            <div className="v-center w-100">
              <div className="mainLightbox container">
                <div className="row g-5">
                  <div className="col-lg-8">
                    <div className="row g-4">
                      <div className="col-lg-12 item">
                        <img
                          src="./img/gallery-big/2.png"
                          alt="galleryimage"
                          className="img-fluid"
                        />
                      </div>
                      {/* <div className="col-lg-6 item">
                        <img
                          src="./img/single-gallery/pf-2-2.jpg"
                          alt="galleryimage"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-6 item">
                        <img
                          src="./img/single-gallery/pf-2-3.jpg"
                          alt="galleryimage"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-12 item">
                        <img
                          src="./img/single-gallery/pf-2-4.jpg"
                          alt="galleryimage"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-6 item">
                        <img
                          src="./img/single-gallery/pf-2-5.jpg"
                          alt="galleryimage"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-6 item">
                        <img
                          src="./img/single-gallery/pf-2-6.jpg"
                          alt="galleryimage"
                          className="img-fluid"
                        />
                      </div> */}
                    </div>
                  </div>

                  <div className="col-lg-4 de_project-info">
                    <h3>SentinelResQ: Wireless Search and Rescue Rover</h3>
                    <div>
                      <p>
                        <strong>SentinelResQ</strong> is a wireless search and
                        rescue rover integrating <strong>ESP32</strong> and{" "}
                        <strong>Atmega</strong> microcontrollers. It is
                        engineered to detect victims and assess environmental
                        hazards using a diverse sensor array.
                      </p>
                      <h3>Purpose</h3>
                      <p>
                        Initially designed for{" "}
                        <strong>disaster response</strong>, the rover was
                        developed to assist in search and rescue operations by
                        providing real-time data on environmental conditions.
                      </p>
                      <h3>Performance and Applications</h3>
                      <p>
                        Experimental data indicate superior performance in{" "}
                        <strong>controlled indoor environments</strong>,
                        suggesting strong potential for:
                      </p>
                      <ul>
                        <li>Gas leak detection</li>
                        <li>Structural integrity assessments</li>
                      </ul>
                      <p>
                        <em>This is a group project.</em>
                      </p>
                    </div>

                    {/* <div className="de_project-details">
                      <div className="d-field">
                        <i className="fa fa-user-o"></i>Client:{" "}
                        <span>Envato</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-file-text-o"></i>Type:{" "}
                        <span>Branding</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-calendar-o"></i>Year:{" "}
                        <span>2020</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-external-link"></i>Preview:{" "}
                        <span>
                          <a
                            href="https://www.envato.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            www.envato.com
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div className="spacer-30"></div>
                    {/* <blockquote>
                      "Very well done theme. Versatile, extremely well coded,
                      and gorgeous. That's a great combo. Highly recommended."
                      <span>John Archi</span>
                    </blockquote> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}














        {/* LIS */}
        {lighbx2 && (
          <div className="LightboxGal">
            <div className="closeGal">
              <button
                className="button-close"
                onClick={handleBtnClickclose2}
              ></button>
            </div>
            <div className="v-center w-100">
              <div className="mainLightbox container">
                <div className="row g-5">
                  <div className="col-lg-8">
                    <img src="./img/gallery/3.png" alt="gallery" />

                    {/* <video className="pop" controls autoPlay loop>
                      <source
                        src="./video/local-video-2.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video> */}
                  </div>

                  <div className="col-lg-4 de_project-info">
                    <h3> Laboratory Management System </h3>

                    <p>
                      A comprehensive Health Laboratory Management System
                      streamlining operations for lab operators, patients, and
                      administrators.
                    </p>
                    <h3>Tech Stack</h3>
<ul>
  <li>Front-End: React, Material-UI, Axios</li>
  <li>Back-End: Node.js, Express.js, MongoDB</li>
  <li>Email Integration: Nodemailer</li>
</ul>

<h3>Key Features</h3>
<ul>
  <li>Email Notifications: Implemented dynamic email notifications using Nodemailer for timely updates on lab results and appointments.</li>
  <li>Invoice Generation: Developed a detailed invoice system with display, printing, and email functionality.</li>
  <li>User Interface Development: Built intuitive, responsive UI components to enhance user experience.</li>
</ul>

<p>
This project significantly improved operational efficiency, enhancing communication and workflow within the laboratory.
</p>


                    {/* <div className="de_project-details">
                      <div className="d-field">
                        <i className="fa fa-user-o"></i>Client:{" "}
                        <span>Envato</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-file-text-o"></i>Type:{" "}
                        <span>Branding</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-calendar-o"></i>Year:{" "}
                        <span>2020</span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-external-link"></i>Preview:{" "}
                        <span>
                          <a
                            href="https://www.envato.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            www.envato.com
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div className="spacer-30"></div>
                    {/* <blockquote>
                      "Very well done theme. Versatile, extremely well coded,
                      and gorgeous. That's a great combo. Highly recommended."
                      <span>John Archi</span>
                    </blockquote> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Gallery;
import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
	return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Education</h2>
          <div className="space-border"></div>
        </div>
      </div>

      <div className="col gh-5">
        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border"></h3>
            <ul className="d_timeline">
              <li className="d_timeline-item" style={{}}>
                <h3 className="d_timeline-title">
                  Reading - Expected Graduation: 2026
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    // justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="../img/UOM Logo.png"
                    style={{ width: "120px", margin: "20px" }}
                  ></img>
                  <p className="d_timeline-text">
                    <span className="d_title">
                      BSc(Hons) in Information Technology
                    </span>
                    <span className="d_company"> University of Moratuwa</span>
                  </p>
                </div>
              </li>
              <li className="d_timeline-item">
                <h3 className="d_timeline-title">2017 - 2020</h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    // justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                     <img
                    src="../img/PCC.png"
                    style={{ width: "120px", margin: "20px" }}
                  ></img>
                <p className="d_timeline-text">
                  <span className="d_title">Physical Science</span>
                  <span className="d_company">
                    Peradeniya Central colledge{" "}
                  </span>
                  Grade: A B B
                </p>

                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* 
                <div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Setificate</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2014 - now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Founder &amp; Creative Director</span>
                                	<span className="d_company">rajitha Studio</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2010 - 2014</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Senior UI / UX Designer</span>
                                	<span className="d_company">Google Inc</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2008 - 2010</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Graphic Designer</span>
                                	<span className="d_company">rajitha Studio</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div> */}
        <div className="spacer-double"></div>
      </div>
    </div>
  );
}

export default hero;
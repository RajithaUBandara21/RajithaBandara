import React from 'react';
import Typed from "react-typed";
import AOS from 'aos';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    return(
        <div className="v-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                       
                        <div className="h1_big">Hi, I'm <span className="color">Rajitha</span></div>
                        <div className="spacer-20"></div>
                        
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={[ " SOFTWARE ENGINEER " ]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <ul className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <li><span>Web Developer </span> </li>
                            <li><span>Programmer</span></li>
                            <li><span>Photographer</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;
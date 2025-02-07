import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Preloader from "../layout/Preloader";
import Particle from '../layout/Particle';
import ScrollToTopBtn from '../layout/ScrollToTop';
import Hero from '../section/hero';
import About from '../section/about';
import Blockquote from '../section/blockquote';
// import Whatido from '../section/whatido';
import Gallery from '../section/gallery';
import Resume from '../section/resume';
// import Counter from '../section/counter';
// import Blog from '../section/blog';
import Contact from '../section/contact';
import Footer from '../section/footer';
import { createGlobalStyle } from 'styled-components';

const image1 ="./img/background/me01.png";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

function home() {
  return (
    <>
      <GlobalStyles />
      <Preloader />
      <div className="home">
        <header id="header-wrap">
          <Navbar />
        </header>

        {/* HERO */}
        <section id="hero-area" className="bg-bottom py-0">
          <Parallax bgImage={image1} strength={300}>
            <Particle />
            <Hero />
            <Link smooth spy to="about">
              <span className="mouse transition" id="fly">
                <span className="scroll"></span>
              </span>
            </Link>
          </Parallax>
        </section>

        {/* ABOUT */}
        <section id="about" className="pb-0">
          <About />
          <Blockquote />
        </section>

        {/* What I DO */}
        {/* <section id="whatido">
        <Whatido/>
        </section> */}

        {/* Gallery */}
        <section id="resume" className="pb-0">
          <Resume />
          {/* <Counter/> */}
        </section>

        {/* Gallery */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Gallery */}
        <section id="blog" className="pb-0">
          {/* <Blog/> */}
        </section>

        {/* contact */}
        <section id="contact" className="pb-0">
          <Contact />
          <Footer />
        </section>

        <div className="float-text">
          <div className="de_social-icons">
            <a
              href="https://www.linkedin.com/in/rajithaubandara/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-linkedin"
                style={{ color: "rgb(148, 148, 148)" }}
              ></i>
            </a>
            <a
              href="https://github.com/RajithaUBandara21"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-github"
                style={{ color: "rgb(148, 148, 148)" }}
              ></i>
            </a>
            <a
              href="https://www.instagram.com/whos_rajitha/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-instagram"
                style={{ color: "rgb(148, 148, 148)" }}
              ></i>
            </a>
            <a
              href="https://web.facebook.com/rajitha.bandara.7737"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-facebook "
                style={{ color: "rgb(148, 148, 148)" }}
              ></i>
            </a>
          </div>
          <span>Contact Me</span>
        </div>
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default home;

import Carousel from "react-bootstrap/Carousel";
import "../styles/home.css";
import carosel1 from "../images/carosel1.webp";
import carosel3 from "../images/carosel3.jpg";
import carosel4 from "../images/carosel4.avif";
import img1 from "../images/aj.webp";
import img2 from "../images/aj2.webp";
import img3 from "../images/aj3.webp";
import img4 from "../images/aj4.webp";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={carosel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carosel4} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carosel3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home-img">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default Home;

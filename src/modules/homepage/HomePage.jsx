import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";
import Slider from "react-slick";
import ahsoka from "../../assets/images/girl.jpeg";
import batch from "../../assets/images/batch.jpeg";
import badbatch from "../../assets/images/badbatch.jpeg";
import imperial from "../../assets/images/imperial.jpeg";
import obiwan from "../../assets/images/obiwan.jpeg";
import badBatchLogo from "../../assets/images/logo-bad-batch.png";
const HomePage = () => {
  const settings = {
    autoPlay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container homepage-container">
        <h5 className="my-4">
          All OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
        </h5>{" "}
        <Slider {...settings}>
          <div className="image-container">
            <div className="text-overlay">
              <h2>
                NEW ADDITIONS COMING TO <br /> STAR TOURS
              </h2>
              <span>
                Ahsoka, Andor, and The Mandalorian inspire <br />
                new star Tours adventures.
              </span>
              <br />
              <button className="btn-container">Stream on disney+</button>
            </div>
            <img src={ahsoka} alt="" className="image" />
          </div>
          <div className="image-container">
            <div className="text-overlay">
              <img
                src={badBatchLogo}
                className="badBatchlogo"
                alt="badBatchlogo"
              />
              <h5 className="mt-3 text-center">
                S3, E7: As enemies close in, the Batch must <br /> evacuate a
                stronghold.
              </h5>

              <br />
              <button className="btn-container btn-container-two">
                Stream on disney+
              </button>
            </div>
            <img src={batch} alt="" />
          </div>
          <div>
            <img src={badbatch} alt="" />
          </div>
          <div>
            <img src={imperial} alt="" />
          </div>
          <div>
            <img src={obiwan} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomePage;

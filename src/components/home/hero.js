import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrow from "../../media/icons/right-arrow.png";

import heroImage from "../../media/images/home/hero1_wardrobe/base.png";
import heroImageDoor from "../../media/images/home/hero1_wardrobe/door.png";
import heroImageDoor2 from "../../media/images/home/hero1_wardrobe/door2.png";

import "../../styles/home/hero.css";

const content = {
  imgA: {
    alt: [
      "We do space saving furniture and sliding wardrobes at Coimbatore, Erode, Tiruppur, Ooty, Salem in TamilNadu",
      "Sliding wardrobes are good option for small apartments.",
      "Aluminium and acrylic or glass shutters look trendy.",
    ],
  },
  button: {
    alt: "We do good residence interior designs at Erode and Salem.",
  },
};

const h1_style = {
  display: "inline",
};

class Hero extends Component {
  render() {
    return (
      <div className="fluid-container">
        <div className="fluid-container hero-base">
          <div className="hero-image-bg-left">
            <img
              src={heroImage}
              alt={content.imgA.alt[0]}
              className="hero-space-image"
            />
            <img
              src={heroImageDoor}
              alt={content.imgA.alt[1]}
              className="hero-space-image-door"
            />
            <img
              src={heroImageDoor2}
              alt={content.imgA.alt[2]}
              className="hero-space-image-door2"
            />
          </div>

          <div className="hero-image-bg-right text-right">
            <div className="hero-text-mobile">SPACE SAVING STORAGE</div>
            <div className="hero-text">SPACE</div>
            <div className="hero-text">SAVING</div>
            <div className="hero-text">STORAGE</div>

            {/* <div className="mt-4-5">
              <Link to="/work-in-progress">
                <button className="btn btn-light btn-explore">
                  Explore interior options for your home{" "}
                  <img
                    className="btn-img"
                    src={arrow}
                    alt={content.button.alt}
                  />
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="hero-base-2">
          <div className="content-container">
            <h2 className="content-title">More Space, Inside and Out.</h2>
            <h1 className="content" style={h1_style}>
              Discover a wide range of premium products and expert design advice
              to create a space that reflects your unique style and personality.
              Let us help you turn your house into the home of your dreams.
            </h1>
            <h1 className="content">
              Available in Coimbatore and deliver all over TamilNadu.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

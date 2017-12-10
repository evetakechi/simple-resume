import React from 'react';
import { Row } from 'react-flexbox-grid';
import '../Styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner-bg">
      <Row className="banner">
        <div className="banner-text">
          <h1 className="animate-pop-in">
            Hello and <span>Welcome!</span>
          </h1>
          <h3 className="animate-pop-in">
            I am <span>Nattakarn Khrongyut</span>
          </h3>
        </div>
      </Row>
      <div className="scroll-downs animate-pop-in">
        <div className="mousey">
          <div className="scroller" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

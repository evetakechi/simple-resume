import React from "react";
import PropTypes from "prop-types";
import { Row, Col,Grid } from "react-flexbox-grid";

import "../Styles/Example.css";

const Example = ({ url }) => {
  return (
    <div className="section-container ex-section">
      <div className="wrap-text">
        <h1> <span className="about-span">Example</span></h1>
      </div>
      <Grid fluid className="space-area">
        <Row >
            <Col xs={12} sm={3} className="center-item" >
               <div className="link-area"><a href={url} target="_blank"><img className="react-ex" alt="react" src={require(`../Images/react.svg`)}/></a></div>
            </Col>
            
        </Row>
      </Grid>
    </div>
  );
};

Example.propTypes = {
  skills: PropTypes.string
};


export default Example;

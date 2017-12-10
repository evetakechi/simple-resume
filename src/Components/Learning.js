import React from "react";
import PropTypes from "prop-types";
import "../Styles/Learning.css";
import { Row, Col, Grid } from "react-flexbox-grid";

const Learning = ({ skills }) => {
  return (
    <div >
      <div className="wrap-text">
        <h1>
          <span className="learning-span ">What am I Learning</span>
        </h1>
      </div>
      <Grid fluid className="space-area">
        <Row>
          {skills.map((skill, index) => (
            <Col className="center-item" xs={12} sm={4} md={3} key={index}>
              <figure className="chart" data-percent={skill.percent}>
                <figcaption>{skill.name}</figcaption>
                <img
                  className={skill.name}
                  alt={skill.name}
                  src={require(`../Images/${skill.logo}.svg`)}
                />
                <svg width="200" height="200">
                  <circle
                    className="outer"
                    cx="95"
                    cy="95"
                    r="85"
                    transform="rotate(-90, 95, 95)"
                  />
                </svg>
                <span className="percent-text">{skill.percent} %</span>
              </figure>
            </Col>
          ))}
        </Row>
      </Grid>   
    </div>
  );
};

Learning.propTypes = {
  skills: PropTypes.array
};

export default Learning;

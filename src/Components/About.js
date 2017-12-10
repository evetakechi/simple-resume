import React from "react";
import PropTypes from "prop-types";
import { Row, Col,Grid } from "react-flexbox-grid";

import "../Styles/About.css";

const About = ({ profile, detail,urlGit,urlIn,onDownload }) => {
  return (
    <div className="section-container">
      <div className="wrap-text">
        <h1> <span className="about-span">About me</span></h1>
      </div>
      <Grid fluid className="space-area">
        <Row >
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="img-area">    
                <img alt="profile" className="img-profile " src={require('../Images/profile.jpg')} />     
            </div>
           
            <div className="btn-area">
              <a href="https://drive.google.com/file/d/1CjlnLqFMztoi93VwD7T2h8UXE226twYV/view?usp=sharing" rel="noopener noreferrer" target="_blank"><button className="fill" >Download</button></a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8}  lg={8}>
            <div className="detail">
              <p>{detail}</p>
            </div>
            
              <ul className="ul-list">
                {profile.map((data, index) => (
                  <li key={index}>
                    {data.label} :
                    <span>{data.text}</span>
                  </li>
                ))}
              </ul>

              <Row >
                <a href={urlGit} target="_blank"><img className="logo-git" src={require(`../Images/github-logo.svg`)} alt="" /></a>
                <a href={urlIn} target="_blank"><img className="logo-in" src={require(`../Images/linkedin-logo-button.svg`)} alt="" /></a>
              </Row>
            
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

About.propTypes = {
  profile: PropTypes.array,
  detail: PropTypes.string,
  urlGit: PropTypes.string,
  urlIn: PropTypes.string,
  onDownload: PropTypes.func
};

export default About;

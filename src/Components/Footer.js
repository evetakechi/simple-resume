import React from "react";
import PropTypes from "prop-types";
import { Row, Grid } from "react-flexbox-grid";

import "../Styles/Footer.css";

const Footer = ({urlGit,urlIn,onScoller}) => {
  return (
    <div className="section-container dark-bg">
      
      <Grid fluid >
        <Row >
            
            <div className="contact">
                <a href={urlGit} target="_blank"><img className="logo-git" src={require(`../Images/github-logo.svg`)} alt="" /></a>
                <a href={urlIn} target="_blank"><img className="logo-in" src={require(`../Images/linkedin-logo-button.svg`)} alt="" /></a>
            </div>

            <div className="go-top"><a  onClick={() => onScoller(0)}><img src={require(`../Images/arrow-up-.svg`)} alt="" /> </a></div>
           
            
        </Row>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
    urlGit: PropTypes.string,
    urlIn: PropTypes.string,
    onScoller: PropTypes.func
  };


export default Footer;

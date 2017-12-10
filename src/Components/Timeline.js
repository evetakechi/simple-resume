import React from "react";
import PropTypes from "prop-types";
import "../Styles/Timeline.css";
import {  Grid } from "react-flexbox-grid";

const Timeline = ({learning}) => {
  return (
    <Grid fluid className="timeline-cover">
      <ul className="timeline">
      {learning.map((data, index) => (
        <li key={index}>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">{data.position}</span>
              <span className="time-wrapper">
                <span className="time">{data.time}</span>
              </span>
            </div>
            <div className="desc">
                <h2>{data.titlePlace}</h2>
                {data.detail.map((detail,index) =>(
                    <p key={index}><strong>{detail.time}</strong><br/>
                    {detail.dataDetail}
                    </p>
                ))}
            </div>
          </div>
        </li>))}
      </ul>
    </Grid>
  );
};

Timeline.propTypes = {
    learning: PropTypes.array
};

export default Timeline;

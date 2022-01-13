import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="pf__features-container__feature">
    <div className="pf__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="pf__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
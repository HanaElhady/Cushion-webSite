import React from 'react';
import './AdvantagesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faTruckFast , faThumbsUp  } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

export default function AdvantagesSection() {
  return (
    <div className="section-body">
      <div className="iconRow">
        <div className="icon-box">
          <div className="circle">
          <FontAwesomeIcon icon={faHouse}/>
          </div>
          <div>
            <h1>Safe shopping</h1>
            <h1>Buy with confidence</h1>
          </div>
        </div>
        <div className="icon-box">
          <div className="circle">
            <FontAwesomeIcon icon={faTruckFast} /> 
          </div>
          <div>
            <h1>Fast shipping</h1>
            <h1>Get your product fast</h1>
          </div>
        </div>
        <div className="icon-box">
          <div className="circle">
          <FontAwesomeIcon icon={faThumbsUp } />
          </div>
          <div>
            <h1>Satisfaction guarantee</h1>
            <h1>Or get your money back</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

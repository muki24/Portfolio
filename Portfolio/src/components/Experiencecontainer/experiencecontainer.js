import React from 'react';
import {Element} from 'react-scroll';
import './experiencecontainer.css';

const experiencecontainer = () => {
  return (
      <Element className="experiencecontainer" id="exp">
      <h1>Experience</h1>
      <div className="experiencecontainer__info">
        <h1> 1+Months </h1>
        <a href='https://www.quodeck.com/welcome/' target='_blank'>
        <p> <span> @ </span> Quodeck Technologies pvt ltd</p>
        </a>
      </div>
    </Element>
  )
}

export default experiencecontainer;

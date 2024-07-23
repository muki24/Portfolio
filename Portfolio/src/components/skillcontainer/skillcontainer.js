import React from 'react';
import {Element} from 'react-scroll';
import './skillcontainer.css';
import skill from '../../img/skill.jpg';
import {LinearProgress} from '@material-ui/core';

const skillcontainer = () => {
  return (
    <div>
       <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src={skill} alt="" />
      </div>
      <div className="skillContainer__text">
        <h1>SKILLSET</h1>
        <div className="skillContainer__skillSet">
          <h4>React</h4>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>Javascript</h4>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4> Html </h4>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4> Css </h4>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>Bootstrap</h4>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
      </div>
    </Element>
    </div>
  )
}

export default skillcontainer;

import React from 'react';
import { Element } from 'react-scroll';
import Project from '../project/project';
import './projectcontainer.css';

const projectcontainer = () => {
    const projects=[
        {
            img:"https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x.png",
            title:"Age calculator",
            desc:"We can calculate our age by entering our birth date,month and year ",
            link:"https://github.com/MukeshQuodeck/muki.git"
        },
        {
          img:"https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x.png",
          title:"calculator",
          desc:"Numerical Calculator",
          link:"https://www.google.com/"
      },
    ];

  return (
    <div>
      <Element className='projectcontainer' id='projects'>
        <h1> Projects </h1>
        <div className='projectcontainer_projects'>
         {
            projects.map((project, index) => {
              return(
                <Project
                key = {index}
                img = {project.img}
                title = {project.title}
                desc = {project.desc}
                link = {project.link}
              />
              )
          }
        )}
        </div>
      </Element>
    </div>
  )
}

export default projectcontainer;

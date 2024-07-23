import React from 'react';
import './topcontent.css';

const topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
           <h1> Mr.Mukesh Karthick </h1>
           <p> A Professional Web Developer </p>
           <a  href="https://drive.google.com/file/d/1VkJ732fPk6nmwJOXlEO-2liv6voPKfTt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <button className='topcontent_downloadbutton'> Download CV </button>
           </a>
        </div>
     </div>
  )
}

export default topcontent;

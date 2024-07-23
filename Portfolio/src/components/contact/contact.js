import React from 'react';
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import "./contact.css";

const contact = () => {
  return (
    <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact__container">
      <p>
        Email : <span>mskarthick7724@gmail.com</span>
      </p>
      <p>
        Phone : <span> 8072872057 </span>
      </p>
      <div className="contact__icons">
        <a
          href="https://www.linkedin.com/in/mukesh-karthick-s-914808218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <LinkedIn />
          </IconButton>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004830557065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <Facebook />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/karthick_subburaj524/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <Instagram />
          </IconButton>
        </a>
      </div>
    </div>
  </Element>
 )
}

export default contact;

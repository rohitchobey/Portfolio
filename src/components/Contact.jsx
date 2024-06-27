import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandWhatsapp } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="paddings">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >

          <a href="https://www.linkedin.com/in/rohit-chobey-ab0b57286/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
         
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:rohitchobey01@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
            <a href="https://web.whatsapp.com/"
             target ="_blank" 
             className="items" >
            < TbBrandWhatsapp className="icons"/>
            </a>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
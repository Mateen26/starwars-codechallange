import React from "react";
import "./Footer.css";
import facebook from "../../assets/images/facebook.svg";
import insta from "../../assets/images/insta.svg";
import youtube from "../../assets/images/youtube.svg";
import twitter from "../../assets/images/twitter.svg";
import linkdin from "../../assets/images/linkdn.svg";
import email from "../../assets/images/phone.svg";
import phone from "../../assets/images/mail.svg";
import location from "../../assets/images/location.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="footer-container">
          <div className="text-start footer-separate-first-container">
            <Link to={"/"} className="footer-heading">
              <h2>Star</h2>
              <h2 className="heading-clr">Wars</h2>
            </Link>
            <p className="helping-you-to-get">More From Star Wars:</p>
            <div className="footer-icons">
              <img className="vector-11" alt="Vector" src={facebook} />
              <img className="vector-11" alt="Vector" src={insta} />
              <img className="vector-11" alt="Vector" src={twitter} />
              <img className="vector-11" alt="Vector" src={youtube} />
              <img className="vector-11" alt="Vector" src={linkdin} />
            </div>
          </div>
          <div className="footer-col footer-separate-second-container">
            <h5 className="heading-clr">Additional Content Information </h5>
            <Link className={`nav-link`} rel="noreferrer" to={"/"}>
              <span className="footerLink">Movies</span>
            </Link>
            <span className="footerLink">Web series</span>
            <span className="footerLink">Advertise</span>
            <span className="footerLink">Our Agent</span>
          </div>
          <div className="footer-col footer-separate-third-container">
            <h5 className="heading-clr">Terms of Use</h5>
            <span className="footerLink">Getting Started</span>
            <span className="footerLink mt-2">Help Center</span>
            <Link
              to={"/privacy-policy"}
              className={`nav-link`}
              rel="noreferrer"
            >
              <span className="footerLink">Privacy Policy</span>
            </Link>
            <Link to={"/remove-data"} className={`nav-link`} rel="noreferrer">
              <span className="footerLink">Remove Data</span>
            </Link>
            <span className="footerLink"></span>
          </div>
          <div className="footer-col footer-separate-forth-container text-start">
            <h5 className="heading-clr">Additional Content Information</h5>
            <div className="email-icon-text">
              <img className="footer-icon" alt="Vector" src={email} />
              <span className="footerLink">contact@starwars.com</span>
            </div>
            <div className="email-icon-text">
              <img className="footer-icon" alt="Vector" src={phone} />
              <span className="footerLink">(414) 668-2312</span>
            </div>
            <div className="email-icon-text">
              <img
                className="footer-icon location-con mt-4"
                alt="Vector"
                src={location}
              />
              <span className="footerLink ms-1">
                794 Mcallister st <br />
                San Francisco, 94102
              </span>
            </div>
            <span className="footerLink"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

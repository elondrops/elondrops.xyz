import React from "react";
import "./Footer.css";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://twitter.com/elondrops"
          rel="noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          href="https://www.instagram.com/elondrops/"
          rel="noreferrer"
          target="_blank"
        >
          <Instagram />
        </a>
      </div>
      <p> © 2021-22 CopyRight:</p>
      <p>elondrops.xyz</p>
    </div>
  );
};

export default Footer;

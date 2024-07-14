import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_delivery} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia amet
            quasi vero, suscipit explicabo perferendis repellendus, cumque
            maxime voluptas atque consequatur tenetur perspiciatis consequuntur,
            assumenda veritatis. Facilis assumenda fuga reiciendis?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Empresa</h2>
          <ul>
            <li>inicio</li>
            <li>sobre nos </li>
            <li>delivery</li>
            <li>privacidade</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>entre em contato</h2>
          <ul>
            <li>+550909-090909</li>
            <li>brdelivery@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Todo os Direitos Reservados</p>
    </div>
  );
};

export default Footer;

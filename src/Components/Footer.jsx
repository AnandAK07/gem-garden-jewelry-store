import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerComponent}>
      <div className={styles.app_Title} >
        <h2>GEM GARDEN</h2>
        <div className={styles.social_media_Div}>
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"
            title="facebook"
          />
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"
            title="Instagram"
          />
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-512.png"
            title="Pinterest"
          />
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png"
            title="Twitter"
          />
        </div>
      </div>

      {/* Contact us section  */}
      <div className={styles.contacts}>
        <p>Contact Us</p>
        <p>Services</p>
        <p>Return</p>
        <p>Term of use</p>
        <p>How to order?</p>
      </div>

      {/* Jwellery Type us section  */}

      <div className={styles.jwellery_Type} >
        <p>Rings</p>
        <p>Bracelets</p>
        <p>Earing</p>
        <p>Necklaces & Pendants</p>
        <p>Watches</p>
      </div>

      {/* Email us section */}
      <div className={styles.email_Section} >
        <h1>Discover the latest collections, news and exclusive launches</h1>
        <input
          className={styles.mailInput}
          type="email"
          placeholder="Enter your e-mail address      "
        />
        <hr />
        <div className={styles.policy}>
          <p>Legal notice</p>
          <p>Private policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

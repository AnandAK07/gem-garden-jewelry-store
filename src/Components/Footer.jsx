import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.parent_container}>
      <div>
        <span>GEM GARDEN</span>
        <div></div>
      </div>

      <div className={styles.child2}>
        <span>Contact Us</span>
        <span>Servise</span>
        <span>Return</span>
        <span>Sterms of use</span>
        <span>How to order?</span>
      </div>
      <div className={styles.child2}>
        <span>Rings</span>
        <span>Bracelets</span>
        <span>Earring</span>
        <span>Necklaces and Pendants</span>
        <span>Watches</span>
      </div>

      <div>
        <div><span>Discover the latest collections,news and exclusive launches</span></div>
        <div></div>
        <div className={styles.last_child}>
          <div><span>legal notice</span></div>
          <div><span>private policy</span></div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

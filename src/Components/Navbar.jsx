import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./Navbar.module.css"

const Navbar = () => {
    
    return (
        <>
            <section className={`${styles.sectionP1}`}>

                <div className={`${styles.navbar}`}>


                    <div className={styles.leftNav}>
                        <Link to="/">Jewelry</Link>
                        <Link to="/">Watches</Link>
                        <Link to="/">Gifts</Link>

                    </div>

                    <div className={styles.logoNav}>
                        <Link to="/"><p>GEM GARDEN</p></Link>
                    </div>

                    <div className={styles.rightNav}>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">Account</Link>
                        <Link to="/cart">Bag</Link>

                    </div>

                </div>

                <div className={`${styles.hero}`}>
                    <div>
                        <h2>Your Jewelry Search Starts Here</h2>
                        <br />
                        <span>Discover  the perfect jewelry pieces &nbsp;&nbsp;  for your uniqye style at our store</span>
                        <br /><br /><br /><br /><br />
                        <p>DISCOVER</p>
                    </div>

                    <div>
                    <img src={require('./image/hero.png')} alt="Hero Img" />
                    </div>
                </div>

            </section>


        </>
    )
}

export default Navbar;
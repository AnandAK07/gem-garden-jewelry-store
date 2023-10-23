import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from "./Navbar.module.css"

const Navbar = () => {




    return (
        
           

                <div className={`${styles.navbar}` } id='navbar'>


                    <div className={styles.leftNav}>
                        <Link to="/products">Jewelry</Link>
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



            


        
    )
}

export default Navbar
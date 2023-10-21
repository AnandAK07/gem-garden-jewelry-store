import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from "./Navbar.module.css"

const Navbar = () => {

    // const [scrollHeight, setScrollHeight] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollHeight(document.documentElement.scrollTop);
    //         console.log(scrollHeight)
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // });

    // useEffect(() => {
    //     if (scrollHeight > 15) {
    //         const nav = document.querySelector("section>div")
    //         // nav.classList.remove("Navbar_navbar__pCmRo")
    //         nav.classList.add("Navbar_scrollNav__Pfsh2")
            
    //     } 
    //     else if(scrollHeight<=15) {
    //         const nav = document.querySelector("section>div")
    //         // nav.classList.add("Navbar_navbar__pCmRo")
    //         nav.classList.remove("Navbar_scrollNav__Pfsh2")
    //     }
    // }, [scrollHeight]);


    return (
        <>
            <section className={`${styles.sectionP1}`}>

                <div className={`${styles.navbar}` }>


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



            </section>


        </>
    )
}

export default Navbar
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import { useSelector } from "react-redux";




// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'




import styles from "./Navbar.module.css"


const Navbar = () => {


  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.authReducer);
  console.log(isAuth);


  return (
    <div className={style.navbar}>
      <Link to={"/"}>
        <img
          src="https://gem-garden.vercel.app/static/media/GemGardenLogo3.397f01f6d4b951e443aa.png"
          alt="logo"
          className={style.logo}
        />
      </Link>


      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={style.nav_child1}>
          <button onClick={() => navigate("/products")} className={style.btn}>Jwellery</button>
          <button onClick={() => navigate("/necklaces")} className={style.btn}>Necklaces</button>
          <button onClick={() => navigate("/earings")} className={style.btn}>Earings</button>
        </div>
        <div className={style.nav_child2}>
          <button className={style.btn} >Contact</button>


          <button onClick={() => navigate("/login")} className={style.btn}>
            Account
          </button>


          <button onClick={() => navigate("/cart")} className={style.btn}>
            Bag
          </button>
        </div>
      </div>
    </div>
  );
};


export default Navbar;

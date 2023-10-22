import React, { useContext, useState } from "react";
import "../App.css"
import ThemeContext from "../ThemeContext/ThemeContext";
const Theme = () => {
    
    const {handleTheme,light} = useContext(ThemeContext)



  return (
    <div >
      <button className="theme-Btn" onClick={()=>handleTheme()}>
        {" "}
        {!light ? (
          <div>
            <span>Dark</span>{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/5261/5261906.png"
              width={30}
              title="Dark Mode"
            />{" "}
          </div>
        ) : (
          <div>
            {" "}
            <span>light</span>{" "}
            <img
              src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-bulb-logo-pictures-image_2289662.jpg"
              title="Light Mode"
              width={30}
            />
          </div>
        )}{" "}
      </button>
    </div>
  );
};

export default Theme;

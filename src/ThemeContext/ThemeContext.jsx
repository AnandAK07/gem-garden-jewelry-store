import React, { createContext, useContext, useState } from 'react'

export const ThemeContext  = createContext();

export const ThemeContextProvider = ({children}) => {
    const [light, setLight] = useState(true);

    const handleTheme = () =>{
        setLight(!light)
    }

  return (
    <ThemeContext.Provider value={{light,setLight,handleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
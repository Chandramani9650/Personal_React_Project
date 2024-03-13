import React, { createContext, useContext, useState } from "react";

 export const Valcontext = createContext()
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
function ContextProvider({children}){
  const [screenSize, setScreenSize] = useState(undefined);
  const [ActiveMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [isClicked, setIsClicked] = useState(initialState);
  const [CurrentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false);
  

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return(
        <Valcontext.Provider value={{ActiveMenu, setActiveMenu,currentColor, setCurrentColor,handleClick,isClicked,setIsClicked,screenSize, setScreenSize,CurrentMode, setCurrentMode,themeSettings, setThemeSettings}}>
          {children}
        </Valcontext.Provider>
    )
}
export default ContextProvider;
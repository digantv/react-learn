import React, { createContext, useEffect, useState, useReducer } from "react";

export const ThemeContext = createContext();
const initialState = {
  background : { value: "light", label: "Light"},
};
const reducer = (previousState, updatedState) => ({
 ...previousState,
 ...updatedState,
});
const ThemeContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);	
  const {     
      background
      //windowWidth,
      // windowHeight,
  } = state;

    const body = document.querySelector("body");
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const changeBackground = (name) => {
      body.setAttribute("data-theme-version", name.value);
      dispatch({background: name});
    };
	
    useEffect(() => {
		  const body = document.querySelector("body");
      let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        window.innerWidth >= 768 && window.innerWidth < 1024
        ? body.setAttribute("data-sidebar-style", "mini")
        : window.innerWidth <= 768
        ? body.setAttribute("data-sidebar-style", "overlay")
        : body.setAttribute("data-sidebar-style", "full");
      };
        body.setAttribute("data-typography", "poppins");
        body.setAttribute("data-theme-version", "light");
       // body.setAttribute("data-theme-version", "dark");
        body.setAttribute("data-layout", "vertical");
        body.setAttribute("data-nav-headerbg", "color_1");
        body.setAttribute("data-headerbg", "color_1");
        body.setAttribute("data-sidebar-style", "overlay");
        body.setAttribute("data-sibebarbg", "color_1");
        body.setAttribute("data-primary", "color_1");
        body.setAttribute("data-sidebar-position", "fixed");
        body.setAttribute("data-header-position", "fixed");
        body.setAttribute("data-container", "wide");
        body.setAttribute("direction", "ltr");
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);
    return (
    <ThemeContext.Provider
      value={{
        body,
        windowWidth,
        windowHeight,
        background,
        changeBackground
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

import React, { createContext, useContext } from "react";

const CScontext = createContext();
const useCS = () => {
  return useContext(CScontext);
};
const CSprovider = ({ children }) => {
  const getData = async () => {
    return "Socheang Dev";
  };
  return (
    <CScontext.Provider value={{ getData }}>{children}</CScontext.Provider>
  );
};
export { useCS, CSprovider };

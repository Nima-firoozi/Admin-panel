"use client";

import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

export default function ToggleDrawerProvider({ children }) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MyContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </MyContext.Provider>
  );
}
export const useToggleDrawer = () => useContext(MyContext);

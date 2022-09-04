import React, { createContext } from "react";
export const DataContext = createContext(null);

const ContextProvider = ({ children }) => {
  const person = "Juan";
  const data = [
    {
      id: 1,
      name: "José",
      age: "30"
    },
    {
      id: 2,
      name: "Luis",
      age: 35
    }
  ];
  const clickFunction = () => {
    console.log("clicked!!");
  };
  return (
    <DataContext.Provider value={{ person, data, clickFunction }}>
      {children}
    </DataContext.Provider>
  );
};
export default ContextProvider;

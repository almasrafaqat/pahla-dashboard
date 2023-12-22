import { createContext, useContext, useState } from "react"


const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {

  const [showSidebar, setShowSidebar] = useState(false);

  const value = {
    showSidebar,
    setShowSidebar,
  }

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>

}

export const useGlobalState = () => {
  return useContext(GlobalState);
}
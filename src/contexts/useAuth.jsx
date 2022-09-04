import { useContext } from "react";
import { DataContext } from "./ContextProvider";

const useAuth = () => useContext(DataContext);

export default useAuth;

import { createContext } from "react";
import { useWrite } from "../Use/useWrite";
import { useRead } from "../Use/useRead";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {

    const [response, setCreate] = useWrite();
    const [list, setUpdate] = useRead();

    return (
        <Global.Provider value={{
            setCreate,
            list

        }}>
            {children}
        </Global.Provider>
    )
}
import {  createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
import { config, socketServer } from "../constants/config";


const socketContext = createContext();

export const GetSoket = () => useContext(socketContext);

export const SocketProvider = ({children}) =>{
    
    const socket = useMemo(()=> io(socketServer,config),[]);

    return(
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    )
}
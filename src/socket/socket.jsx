import {  createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
import { config, socketServer } from "../constants/config";


const socketContext = createContext();

export const GetSoket = () => useContext(socketContext);

export const SocketProvider = ({children}) =>{
    
    
    const socket = useMemo(()=> io(socketServer,{
        reconnection: true,
        reconnectionAttempts: 5, // Try to reconnect 5 times
        reconnectionDelay: 1000, // Wait 1 second between attempts
        reconnectionDelayMax: 5000, // Maximum delay of 5 seconds,
        ...config}),[]);
    
    return(
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    )
}
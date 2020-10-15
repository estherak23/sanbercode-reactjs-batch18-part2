import React, { useState, createContext } from "react";
import axios from "axios"


export const BuahContext = createContext();

export const BuahProvider = props => {
    const [daftarBuah, setDaftarBuah] = useState(null)
    const [input, setInput] = useState({name: "",price:"",weight:"" ,id: null})
   
   
    
    return (
        < BuahContext.Provider value={[daftarBuah, setDaftarBuah, input, setInput]}>
          {props.children}
        </ BuahContext.Provider>
      );
    };
import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './tugas10/tugas10'
import Form from './tugas9/tugas9'
import Clock from './tugas11/clock'
import Time from './tugas11/time'

import DaftarBuah from './tugas13/tugas13'
import {BuahProvider} from "./tugas14/BuahContext"
import BuahForm from "./tugas14/BuahForm"
import BuahList from "./tugas14/BuahList"

function App() {
 return(
<>
{/*}
      <Form/>
      <List />

      <Clock/>
      <Time/>


      <DaftarBuah/>

 
      <DaftarBuah/>
{*/}

      <BuahProvider>
      <div style={{width: "40%", margin: "0 auto"}}>
        <BuahList/>
        <br/>
        <br/>
        <BuahForm/>
      </div>
    </BuahProvider>

    
</>
);
}

export default App;

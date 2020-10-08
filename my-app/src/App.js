import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return <>
  <div style={{border: " solid #000", padding: "20px",width:"400px",height:"400px",marginLeft:"200px",marginBottom:"50px",backgroundColor:"pink"}}>
 <h1>form pembelian buah</h1>

 <table>
<tr>
<td><label for="nama"> <b>nama pelanggan:</b></label></td>
<td><input type="text" name="nama" id=""></input></td>
</tr>
<tr>
<td><label for="item"><b>daftar item:</b></label></td>
<td><input type="checkbox" id="buah" name="buah" value=""></input>
     <label for="buah">semangka</label></td>
</tr>

<tr>
<td></td>
<td> <input type="checkbox" id="buah" name="buah" value=""></input>
     <label for="buah">jeruk</label></td>
</tr>

<tr>
<td></td>
<td>  <input type="checkbox" id="buah" name="buah" value=""></input>
     <label for="buah">nanas</label></td>
</tr>

<tr>
<td></td>
<td> <input type="checkbox" id="buah" name="buah" value=""></input>
     <label for="buah">salak</label></td>
</tr>

<tr>
<td></td>
<td><input type="checkbox" id="buah" name="buah" value=""></input>
     <label for="buah">anggur</label></td>
</tr>
<br></br>
     <br></br>
     <button type="submit" formaction="">kirim</button>
 </table>
 </div>
 </>
}

export default App;

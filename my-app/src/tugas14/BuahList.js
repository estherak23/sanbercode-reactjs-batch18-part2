
import {BuahContext} from "./BuahContext"
import axios from "axios"
import React, {useContext,useEffect} from "react"



const BuahList = () =>{
    const [daftarBuah, setDaftarBuah, input, setInput] = useContext(BuahContext)

    useEffect(() => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{return{id:el.id,name:el.name,price:el.price,weight:el.weight}}))
          })
        }
      }, [daftarBuah]);



    const handleDelete = (event) =>{
        var idDataBuah= parseInt(event.target.value) 
        var newDaftarBuah = daftarBuah.filter(x=> x.id !== idDataBuah)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(res => {
          
          console.log(res)
        })
        setDaftarBuah([...newDaftarBuah])
      }




      const handleEdit = (event) =>{
        var idDataBuah= parseInt(event.target.value)
        var dataBuah = daftarBuah.find(x=> x.id === idDataBuah)
        setInput({id: idDataBuah, name:dataBuah.name,price:dataBuah.price,weight:dataBuah.weight })
    
      }
      


return(
    <>
    <h1>Daftar Harga Buah</h1>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
          {
            daftarBuah !== null && daftarBuah.map((item,index)=>{
              return(                    
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.weight/1000} kg</td>
                  <td>
                    <button onClick={handleEdit} value={item.id}>Edit</button>
                    &nbsp;
                    <button onClick={handleDelete} value={item.id}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    </>
)

}
export default BuahList
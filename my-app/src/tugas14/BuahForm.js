import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"
import axios from "axios"



const BuahForm = () =>{
    const [daftarBuah, setDaftarBuah, input, setInput] = useContext(BuahContext)


 
    const handlechange = (event) =>{
        let typeOfInput = event.target.name
        
        switch (typeOfInput){
          case "name":
              {
            setInput({...input,name:event.target.value});
            break
          }
          case "price":
              {
            setInput({...input,price:event.target.value});
            break
          }
          case "weight":
              {
            setInput({...input,weight:event.target.value});
            break
          }
          default:
            {break;}
        }
      }




      const handleSubmit =(event) =>{
        // menahan submit
        event.preventDefault()
        let name=input.name
        let price=input.price.toString()

        if ( input.id === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name,price,weight:input.weight})
            .then(res => {
              
              setDaftarBuah([...daftarBuah, {id:res.data.id, 
                name,
                price,
                weight:input.weight}])
              
            })
      
          }else{
      
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, { name,price,weight:input.weight})
            .then(()=> {
              var dataBuah = daftarBuah.find(el =>el.id === input.id)
                 dataBuah.name = name
                 dataBuah.price = price
                 dataBuah.weight = input.weight
                 setDaftarBuah([...daftarBuah])

              })
                }
                
              setInput({id: null, name: "",price:"",weight:0})
            
        }
      
      
    return(
<>
 {/* Form */}
 <h1>Form Daftar Harga Buah</h1>
              <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                <div style={{border: "1px solid #aaa", padding: "20px"}}>
                  <form onSubmit={handleSubmit}>
                    <label style={{float: "left"}}>
                      Nama:
                    </label>
                    <input style={{float: "right"}} type="text" required name="name" value={input.name} onChange={handlechange}/>
                    <br/>
                    <br/>
                    <label style={{float: "left"}}>
                      Harga:
                    </label>
                    <input style={{float: "right"}} type="text" required name="price" value={input.price} onChange={handlechange}/>
                    <br/>
                    <br/>
                    <label style={{float: "left"}}>
                      Berat (dalam gram):
                    </label>
                    <input style={{float: "right"}} type="number" required name="weight" value={input.weight} onChange={handlechange}/>
                    <br/>
                    <br/>
                    <div style={{width: "100%", paddingBottom: "20px"}}>
                      <button style={{ float: "right"}}>submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </>


    )
}

export default BuahForm
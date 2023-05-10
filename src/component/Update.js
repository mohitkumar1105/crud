import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Update = () => {
    const[id, setId] = useState("0")
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[number, setNumber] = useState("")

    const history = useNavigate()

    useEffect(() =>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setNumber(localStorage.getItem("number"));
    },[])


    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(
            `https://645a24ea95624ceb21f90311.mockapi.io/crud-system/${id}`,{
            name:name,
            email:email,
            number:number,
           
         });

         history("/read")
         
    }


    


    return (
        <>
            <div style={{ width: "100%", height: "100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
                <form style={{width:"30%", padding:"10px", border:".8px solid gray", borderRadius:'5px'}}>
                    <h2 style={{padding:"5px"}}>Update</h2>

                    <div className="mb-3">
                        <label>Name</label>
                        <input type="email" style={{width:"100%"}}
                        value={name}
                         onChange={(e) => setName(e.target.value)}

                        />

                    </div>


                    <div className="mb-3">
                        <label>E-mail</label>
                        <input type="text" style={{width:"100%"}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>



                    
                    <div className="mb-3">
                        <label>Number</label>
                        <input type="text" style={{width:"100%"}}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}


                        />
                    </div>



                    <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Submit</button>
                    <Link to="/read">
                    <button className="btn btn-dark ms-2">back</button>
                    </Link>
                </form>
            </div>

        </>
    )
}
export default Update
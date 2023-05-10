import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Create = () => {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[number, setNumber] = useState("")

    const history = useNavigate()
    
     const header = {"Access-Control-Allow-Origin":"*"};


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(
            "https://645a24ea95624ceb21f90311.mockapi.io/crud-system",{
            name:name,
            email:email,
            number:number,
            header,
         });

         history("/read")

         
    
    }


    return (
        <>
            <div style={{ width: "100%", height: "100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
                <form style={{width:"30%", padding:"10px", border:".8px solid gray", borderRadius:'5px'}}>
                <div className="d-flex justify-content-between">
                    <h2 style={{padding:"5px"}}>Create</h2>
                    <Link to="/read">
                    <h2 className="btn btn-primary">Show data</h2>
                    </Link>
                    </div> 

                    <div className="mb-3">
                        <label>Name</label>
                        <input type="email" style={{width:"100%"}}
                         onChange={(e) => setName(e.target.value)}

                        />

                    </div>


                    <div className="mb-3">
                        <label>E-mail</label>
                        <input type="text" style={{width:"100%"}}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>



                    
                    <div className="mb-3">
                        <label>Number</label>
                        <input type="text" style={{width:"100%"}}
                        onChange={(e) => setNumber(e.target.value)}


                        />
                    </div>



                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>

        </>
    )
}
export default Create
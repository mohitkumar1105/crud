import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get("https://645a24ea95624ceb21f90311.mockapi.io/crud-system")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }




    const handleDelete = (id) => {
        axios.delete(
            `https://645a24ea95624ceb21f90311.mockapi.io/crud-system/${id}`
        ).then(() => {
            getData();
        })
    }



    const SetToLocalStorage = (id, name, email, number) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("number", number)

    }



    useEffect(() => {
        getData();
    }, [])







    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 style={{ margin: "10px" }}>Read</h2>
                <Link to="/">
                    <h2 className="btn btn-dark m-2">Create</h2>
                </Link>
            </div>


            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Number</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>


                {data.map((ele) => {
                    return (

                        <tbody>
                            <tr>
                                <th scope="row">{ele.id}</th>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.number}</td>
                                
                                    <td>
                                    <Link to="/update">
                                    <IconButton style={{ color: "green" }} onClick={() => SetToLocalStorage(ele.id, ele.name, ele.email, ele.number)}>< EditIcon /></IconButton>
                                    </Link>
                                    </td>
                                
                                <td><IconButton style={{ color: "red" }} onClick={() => handleDelete(ele.id)}><DeleteIcon /></IconButton></td>
                            </tr>
                        </tbody>

                    )
                })}

            </table>


        </>

    )
}
export default Read
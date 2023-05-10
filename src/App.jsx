import React from "react";
import "./index"
import Create from "./component/create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./component/Read";
import  Update  from "./component/Update";


const App = () => {



    return (


        <div className="container">

            <BrowserRouter>
                <Routes>

                    <Route exact path="/"element={<Create/>}></Route>
                    <Route exact path="/read"element={<Read/>}></Route>
                    <Route exact path="/update"element={<Update/>}></Route>
                   

                </Routes>

            </BrowserRouter>

        </div>
    )
}
export default App
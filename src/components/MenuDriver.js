
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Home"
import Sellers from "./Sellers"
import Properties from "./Properties"
import Buyers from "./Buyers"
import AddSeller from "./AddSeller"
import NavBar from "./NavBar"


function Routing(){


    return(
        <>
        <div>
            <BrowserRouter>
           
           <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sellers" element={<Sellers/>}></Route>
                <Route path="/buyers" element={<Buyers/>}></Route>
                <Route path="/properties" element={<Properties/>}></Route>
                <Route path="/addseller" element={<AddSeller/>}></Route>
            </Routes>
            
            
            </BrowserRouter>
        </div>
        
        
        </>

    )
}

export default Routing
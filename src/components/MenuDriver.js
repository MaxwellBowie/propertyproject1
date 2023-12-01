
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Home"
import Sellers from "./Sellers"
import Properties from "./Properties"
import Buyers from "./Buyers"
import AddSeller from "./AddSeller"


function Routing(){


    return(
        <>
        <div>
            <b>Hello</b>
            <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sellers">Sellers</Link></li>
                    <li><Link to="/buyers">Buyers</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                </ul>
            </nav>

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
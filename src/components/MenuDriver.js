
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Home"
import Sellers from "./Sellers"
import Properties from "./Properties"
import Buyers from "./Buyers"
import AddSeller from "./AddSeller"
import NavBar from "./NavBar"
import PropertySearch from "./PropertySearch"




function Routing(){
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <br/>
        <div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sellers" element={<Sellers/>}></Route>
                    <Route path="/buyers" element={<Buyers/>}></Route>
                    <Route path="/properties" element={<Properties/>}></Route>
                    <Route path="/addseller" element={<AddSeller/>}></Route>
                    <Route path="/searchproperty" element={<PropertySearch/>}></Route>
                    {/* <Route path="/filtered" element={<FilteredProperty/>}></Route> */}
                </Routes>
        </div>
        </BrowserRouter>
        </>
    )
}

export default Routing
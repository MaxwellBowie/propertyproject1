
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Home"
import Sellers from "./Sellers"
import Properties from "./Properties"
import Buyers from "./Buyers"
import AddSeller from "./AddSeller"
import AddBuyer from "./AddBuyer"
import AddProperty from "./AddProperty"
import NavBar from "./NavBar"
import PropertySearch from "./PropertySearch"
import PropertyStatus from "./PropertyStatus"
import Booking from "./Booking"


function Routing(){
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <br/>
        <div>
                <Routes>
                    <Route path="/" element={<Properties/>}></Route>
                    <Route path="/sellers" element={<Sellers/>}></Route>
                    <Route path="/buyers" element={<Buyers/>}></Route>
                    <Route path="/properties" element={<Properties/>}></Route>
                    <Route path="/addseller" element={<AddSeller/>}></Route>
                    <Route path="/addbuyer" element={<AddBuyer/>}></Route>
                    <Route path="/addproperty" element={<AddProperty/>}></Route>
                    <Route path="/searchproperty" element={<PropertySearch/>}></Route>
                    <Route path="/propertyStatus" element={<PropertyStatus/>}></Route>
                    <Route path="/bookings" element={<Booking/>}></Route>
                </Routes>
        </div>
        </BrowserRouter>
        </>
    )
}

export default Routing
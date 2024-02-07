
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

function Routing(){
    return(
        <>
        <header role="banner"></header>
        <BrowserRouter>
        <NavBar/>
        <br/>
        <main role="main">
        <div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sellers" element={<Sellers/>}></Route>
                    <Route path="/buyers" element={<Buyers/>}></Route>
                    <Route path="/properties" element={<Properties/>}></Route>
                    <Route path="/addseller" element={<AddSeller/>}></Route>
                    <Route path="/addbuyer" element={<AddBuyer/>}></Route>
                    <Route path="/addproperty" element={<AddProperty/>}></Route>
                    <Route path="/searchproperty" element={<PropertySearch/>}></Route>
                    <Route path="/propertyStatus" element={<PropertyStatus/>}></Route>
                </Routes>
        </div>
        </main>
        </BrowserRouter>
        </>
    )
}

export default Routing
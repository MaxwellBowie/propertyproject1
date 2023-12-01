
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import DisplaySellers from "./Sellers"
import Home from "./Home"

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
                    {/* <li><Link to="/buyers">Buyers</Link></li>
                    <li><Link to="/properties">Properties</Link></li> */}
                </ul>
            </nav>

                    <DisplaySellers/>
            <Routes>
                <Route path="/" elements={<Home/>}></Route>
                <Route path="/sellers" elements={<DisplaySellers/>}></Route>
                {/* <Route path="/buyers" elements={<Buyers/>}></Route>
                <Route path="/properties" elements={<Properties/>}></Route> */}
            </Routes>
            
            
            </BrowserRouter>
        </div>
        
        
        </>

    )
}

export default Routing